import { useCount } from '../stores/count'
import { useShowEdit } from '../stores/showEdit'
import CloseButton from './CloseButton'

export default function FormEdit() {
	const changeCounter = useCount((state) => state.changeCounter)
	const showFormEdit = useShowEdit((state) => state.showFormEdit)
	const changeShowFormEdit = useShowEdit((state) => state.changeShowFormEdit)
	const valueFormEdit = useShowEdit((state) => state.value)

	const handleClickClose = () => {
		changeShowFormEdit(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData(e.target)
		const title = formData.get('title')
		const value = formData.get('value')
		const color = formData.get('color')

		console.log(title, value, color)
		changeCounter(valueFormEdit.title, { newTitle: title, value, color })
		changeShowFormEdit(false)
	}

	return (
		<div
			className={`fixed w-full h-screen z-50 top-0 left-0 bg-black/30 backdrop-blur-sm p-[3%] justify-center items-center ${showFormEdit ? 'flex' : 'hidden'}`}
		>
			<form
				className='bg-neutral-900 p-5  md:w-99 w-3/4 rounded-2xl relative'
				onSubmit={handleSubmit}
			>
				<CloseButton handleClickClose={handleClickClose} />
				<h3 className='text-left text-xl mb-4'>Editar Contador</h3>

				<div className='flex flex-col gap-3'>
					<div className='text-left flex flex-col'>
						<label className='ml-1 mb-[2px]' htmlFor='title'>
							Título
						</label>
						<input
							type='text'
							name='title'
							placeholder='Title'
							value={valueFormEdit.title}
							className='border border-neutral-800 rounded-xl py-2 px-2 placeholder:text-gray-400 focus-within:shadow-indigo-500/50 shadow-md focus-within:border-transparent focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-50 focus-within:outline-none transition-all'
						/>
					</div>

					<div className='text-left flex flex-col'>
						<label className='ml-1 mb-[2px]' htmlFor='value'>
							Valor
						</label>
						<input
							type='number'
							name='value'
							placeholder='Value'
							value={valueFormEdit.value}
							className='border border-neutral-800 rounded-xl py-2 px-2 placeholder:text-gray-400 focus-within:shadow-indigo-500/50 shadow-md focus-within:border-transparent focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-50 focus-within:outline-none transition-all'
						/>
					</div>

					<div className='text-left flex flex-col'>
						<label className='ml-1 mb-[2px]' htmlFor='color'>
							Color
						</label>
						<input
							type='text'
							name='color'
							placeholder='Color'
							value={valueFormEdit.color}
							className='border border-neutral-800 rounded-xl py-2 px-2 placeholder:text-gray-400 focus-within:shadow-indigo-500/50 shadow-md focus-within:border-transparent focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-50 focus-within:outline-none transition-all'
						/>
					</div>

					<div>
						<button
							type='submit'
							className='bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-xl w-full mt-1'
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}
