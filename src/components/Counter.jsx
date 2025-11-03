import { useState } from 'preact/hooks'
import { useCount } from '../stores/count'
import ArrowDown from '../icons/ArrowDown'
import AddIcon from '../icons/AddIcon'
import MinusIcon from '../icons/MinusIcon'

export function Counter({ title, value, color }) {
	const [amount, setAmount] = useState(0)
	const [showCustomInput, setShowCustomInput] = useState(false)
	const countIncrement = useCount((state) => state.increment)
	const countDecrement = useCount((state) => state.decrement)
	const customIncrement = useCount((state) => state.customIncrement)

	const handleClickIncrement = () => {
		countIncrement(title)
	}

	const handleClickDecrement = () => {
		countDecrement(title)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const amountNumber = parseInt(amount)
		console.log('amount!!', amountNumber)
		customIncrement(title, amountNumber)
		setAmount(0)
		setShowCustomInput(false)
	}

	return (
		<div
			key={title}
			className={`border-2 rounded-4xl px-10 pt-10 transition-all ${showCustomInput ? 'pb-10' : 'pb-6'}`}
			style={{
				borderColor: color,
			}}
		>
			<h2
				className={`font-semibold text-2xl rounded-2xl text-black inline-block px-4 py-1 text-center bg-[var(--dynamic-color)]`}
				style={{
					'--dynamic-color': color,
				}}
			>
				{title}
			</h2>
			<p className='text-[60px] my-6'>{value}</p>

			<div className='flex gap-3 text-3xl' style={{ color: color }}>
				<button
					type='button'
					className='border-2 w-18 h-18 rounded-full flex justify-center items-center transition-colors hover:cursor-pointer hover:text-black hover:bg-[var(--dynamic-color)]'
					style={{
						'--dynamic-color': color,
						borderColor: color,
					}}
					onClick={handleClickIncrement}
				>
					<AddIcon />
				</button>
				<button
					type='button'
					className='border-2 w-18 h-18 rounded-full flex justify-center items-center transition-colors hover:cursor-pointer hover:text-black hover:bg-[var(--dynamic-color)]'
					style={{
						'--dynamic-color': color,
						borderColor: color,
					}}
					onClick={handleClickDecrement}
				>
					<MinusIcon />
				</button>
			</div>

			<div className='w-full flex justify-center items-center'>
				{showCustomInput ? (
					<div className='w-9 h-9 flex justify-center items-center'>
						<form onSubmit={handleSubmit}>
							<input
								type='number'
								name='amount'
								className='w-9 h-9 text-center border-b-2 text-xl focus-within:outline-0'
								style={{ borderColor: color }}
								value={amount}
								onChange={(e) => {
									const newValue = e.target.value

									// RegEx para aceptar solo dígitos (0-9) o una cadena vacía
									// ^\d*$: Inicio (^) seguido de cero o más dígitos (\d*), hasta el final ($)
									if (newValue === '' || /^\d*$/.test(newValue)) {
										setAmount(newValue)
									}
								}}
							/>
						</form>
					</div>
				) : (
					<button
						type='button'
						onClick={() => {
							setShowCustomInput(true)
						}}
					>
						<ArrowDown />
					</button>
				)}
			</div>
		</div>
	)
}
