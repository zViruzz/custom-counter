import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCount = create(
	persist(
		(set) => ({
			lastDate: null,
			countersPersistent: [],
			counters: [],
			colorIndex: 0,
			colorChange: () =>
				set((state) => {
					if (state.colorIndex >= 4) {
						return {
							colorIndex: 0,
						}
					}
					return {
						colorIndex: state.colorIndex + 1,
					}
				}),
			resetCounters: () =>
				set((state) => {
					const newCountersPersistent = state.countersPersistent.map((c) => {
						const currentCounter = state.counters.find(
							(counter) => counter.title === c.title,
						)
						return {
							...c,
							value: c.value + (currentCounter?.value || 0),
						}
					})

					return {
						...state,
						countersPersistent: newCountersPersistent,
						counters: state.counters.map((c) => ({ ...c, value: 0 })),
					}
				}),
			addCounter: (counter) =>
				set((state) => {
					const newTitle = counter.title.charAt(0).toUpperCase() + counter.title.slice(1)
					const date = new Date()
					const newCounter = { ...counter, title: newTitle, value: 0, createAt: date }

					return {
						counters: [...state.counters, newCounter],
						countersPersistent: [...state.countersPersistent, newCounter],
					}
				}),
			deleteCounter: (title) =>
				set((state) => ({
					counters: state.counters.filter((c) => c.title !== title),
				})),
			increment: (title) =>
				set((state) => ({
					counters: state.counters.map((c) =>
						c.title === title ? { ...c, value: c.value + 1 } : c,
					),
				})),
			decrement: (title) =>
				set((state) => ({
					counters: state.counters.map((c) =>
						c.title === title ? { ...c, value: c.value > 0 ? c.value - 1 : 0 } : c,
					),
				})),
			customIncrement: (title, amount) =>
				set((state) => ({
					counters: state.counters.map((c) =>
						c.title === title ? { ...c, value: c.value + amount } : c,
					),
				})),
			saveTheDate: (data) => set(() => ({ lastDate: data })),
		}),
		{
			name: 'count-storage',
		},
	),
)
