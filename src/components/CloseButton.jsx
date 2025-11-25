import CloseIcon from '../icons/CloseIcon'

export default function CloseButton({ handleClickClose }) {
	return (
		<button
			type='button'
			className='absolute right-5 top-5 border-2 rounded-xl p-[2px] text-red-500 opacity-80 cursor-pointer hover:bg-red-500 group'
			onClick={handleClickClose}
		>
			<CloseIcon className='group-hover:text-black' />
		</button>
	)
}
