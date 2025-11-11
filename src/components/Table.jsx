import CloseIcon from '../icons/CloseIcon'
import { useCount } from '../stores/count'

export function Table({ showTable, setShowTable }) {
	const countersPersistent = useCount((state) => state.countersPersistent)

	const formatDate = (fecha) => {
		return new Date(fecha).toLocaleDateString('es-ES', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})
	}

	return (
		<div
			className={`absolute w-screen h-screen z-20 top-0 left-0 bg-black/30 backdrop-blur-sm p-[3%] ${showTable ? 'block' : 'hidden'}`}
		>
			<div className='bg-neutral-900 h-full w-full rounded-lg p-8 relative'>
				<button
					type='button'
					className='absolute right-5 top-5 border-2 rounded-xl p-[2px] text-red-500 opacity-60 cursor-pointer hover:bg-red-500'
					onClick={() => setShowTable(false)}
				>
					<CloseIcon className='hover:text-black' />
				</button>
				<h2 className='text-left text-2xl mb-6'>Lista de Contador</h2>
				<div className='border border-neutral-600 rounded-xl p-3'>
					<table className='w-full mx-2'>
						<thead>
							<tr className='text-lg h-12'>
								<th className='text-left'>Titulo</th>
								<th className='text-left'>Total</th>
								<th className='text-left'>Fecha Creada</th>
							</tr>
						</thead>

						<tbody className='divide-y divide-neutral-700 border-t border-neutral-700'>
							{countersPersistent.map((item) => (
								<tr key={item.title}>
									<td className='text-left w-[50%] py-4 px-2 font-medium'>
										{item.title}
									</td>
									<td className='text-left w-[25%] text-xl font-semibold'>
										{item.value}
									</td>
									<td className='text-left w-[25%] text-neutral-400'>
										{formatDate(item.createAt)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
