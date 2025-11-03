import { useEffect, useState } from 'preact/hooks'
import ArrowUpIcon from '../icons/ArrowUpIcon'
import { useCount } from '../stores/count'
import { COLORS } from '../utils/constans'

export function FormNewCounter() {
	const [valueTitle, setValueTitle] = useState('')
	const [showInput, setShowInput] = useState(false)
	const [colorState, setColorState] = useState('')
	const [showSelectColors, setShowSelectColors] = useState(false)
	const addCounter = useCount((state) => state.addCounter)
	const colorIndex = useCount((state) => state.colorIndex)

	useEffect(() => {
		setColorState(COLORS[colorIndex + 1])
		console.log(colorState)
	}, [colorIndex])

	const handleSubmit = (e) => {
		e.preventDefault()

		if (showInput) {
			console.log('Add counter', valueTitle)

			if (valueTitle) {
				addCounter({ title: valueTitle, color: colorState, value: 0 })
			}
			setValueTitle('')
		}
		setShowInput(!showInput)
	}

	const handleClickAdd = () => {
		if (!showInput) {
			setShowInput(true)
			return
		}

		if (valueTitle) {
			addCounter({ title: valueTitle, color: colorState, value: 0 })
		}
		setValueTitle('')
		setShowInput(!showInput)
	}

	return (
		<form className='relative mt-10' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Title'
				value={valueTitle}
				onChange={(e) => setValueTitle(e.target.value)}
				className={`border border-neutral-700 rounded-full h-15 transition-all duration-400 placeholder:text-black ${showInput ? 'w-60 px-5  placeholder:text-gray-400 focus-within:shadow-indigo-500/50 shadow-lg focus-within:border-transparent focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-50 focus-within:outline-none' : 'w-15'} `}
			/>
			<button
				className='top-0 right-0 h-15 w-15 flex items-center justify-center absolute rounded-full border-neutral-700 border-2 hover:bg-white hover:text-black transition-colors hover:cursor-pointer hover:border-white focus-within:outline-none focus-within:bg-white focus-within:text-black'
				type='button'
				onClick={handleClickAdd}
			>
				<ArrowUpIcon className='w-6 h-6' />
			</button>
			<div
				className={`flex-col md:flex-row md:h-15  h-auto flex absolute gap-2 top-0 left-65 rounded-full bg-black border border-neutral-700 overflow-hidden transition-opacity duration-400 ${showInput ? 'opacity-100 flex' : 'opacity-0 hidden'}`}
			>
				<button
					className='w-15 h-15 rounded-full cursor-pointer'
					type='button'
					style={{ backgroundColor: colorState }}
					onClick={() => setShowSelectColors(!showSelectColors)}
				></button>

				{showSelectColors && (
					<div className='flex transition-all items-center gap-2  flex-col md:flex-row justify-center'>
						{COLORS.map((color) => (
							<button
								key={color}
								className='w-13 h-13 rounded-full cursor-pointer'
								type='button'
								style={{ backgroundColor: color }}
								onClick={() => setColorState(color)}
							></button>
						))}
					</div>
				)}
			</div>
		</form>
	)
}
