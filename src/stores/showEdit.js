import { create } from 'zustand'

export const useShowEdit = create(
	(set) => ({
		value: {},
		initialValue: (value) => set({ value }),
		showFormEdit: false,
		changeShowFormEdit: (value) => set({ showFormEdit: value }),
	}),
	{
		name: 'show-edit',
	},
)
