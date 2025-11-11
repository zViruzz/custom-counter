import './app.css'
import { useEffect, useState } from 'preact/hooks'
import { useCount } from './stores/count'
import { Counter } from './components/Counter'
import { FormNewCounter } from './components/FormNewCounter'
import TableIcon from './icons/TableIcon'
import { Table } from './components/Table'

export function App() {
	const [showTable, setShowTable] = useState(false)
	const lastDate = useCount((state) => state.lastDate)
	const counters = useCount((state) => state.counters)
	const resetCounters = useCount((state) => state.resetCounters)
	const saveDate = useCount((state) => state.saveTheDate)

	// console.log('state counters', state.counters)
	// console.log('state countersPersisten', state.countersPersistent)

	useEffect(() => {
		const now = new Date()
		const currentDate = now.toDateString()

		if (!lastDate) {
			saveDate(currentDate)
			return
		}

		if (currentDate !== lastDate) {
			resetCounters()
			saveDate(currentDate)
		}
	}, [lastDate, resetCounters, saveDate])

	const handleClickTableButton = () => {
		window.document.body.style.overflow = 'hidden'
		setShowTable(!showTable)
	}

	return (
		<div className='flex flex-col h-full w-full p-4'>
			<button
				type='button'
				className='fixed right-5 bottom-5 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 cursor-pointer'
				onClick={handleClickTableButton}
			>
				<TableIcon className='w-6 h-6' />
			</button>
			<Table showTable={showTable} setShowTable={setShowTable} />

			<div className='flex justify-center flex-col mb-20 items-center'>
				<h1 className='text-4xl my-5 font-medium'>CounTeR</h1>
				<FormNewCounter />
			</div>
			<div className='flex gap-7 items-start flex-wrap w-full justify-center'>
				{counters.map((counter) => (
					<Counter
						key={counter.title}
						title={counter.title}
						value={counter.value}
						color={counter.color}
					/>
				))}
			</div>
		</div>
	)
}
