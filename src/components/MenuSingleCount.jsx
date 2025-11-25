import { useState } from 'preact/hooks'
import MenuIcon from '../icons/MenuIcon'
import { useShowEdit } from '../stores/showEdit'

export default function MenuSingleCount({ title, value, color }) {
	const changeShowFormEdit = useShowEdit((state) => state.changeShowFormEdit)
	const initialValue = useShowEdit((state) => state.initialValue)
	const [showMenu, setShowMenu] = useState(false)

	const handleMenuClick = () => {
		setShowMenu(!showMenu)
	}

	const handleEditClick = () => {
		changeShowFormEdit(true)
		setShowMenu(false)
		initialValue({ title, value, color })
	}

	return (
		<>
			<button
				type='button'
				onClick={handleMenuClick}
				className='hover:bg-black rounded-sm py-1 hover:cursor-pointer'
			>
				<MenuIcon />
			</button>

			<ul
				className={`bg-neutral-900 p-2 absolute right-8 top-8 rounded-xl border border-neutral-700 z-30 ${showMenu ? 'block' : 'hidden'}`}
			>
				<li className=''>
					<button
						type='button'
						className='hover:cursor-pointer px-2 py-1 text-white text-sm hover:bg-neutral-950 rounded-lg w-full text-left'
						onClick={handleEditClick}
					>
						Editar
					</button>
				</li>
				<li>
					<button
						type='button'
						className='text-red-500 text-sm px-2 py-1 hover:bg-neutral-950 rounded-lg hover:cursor-pointer w-full text-left'
					>
						Eliminar
					</button>
				</li>
			</ul>
		</>
	)
}
