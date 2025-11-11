const CloseIcon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		width='1.7em'
		height='1.7em'
		aria-hidden='true'
		{...props}
	>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='m16 16-4-4m0 0L8 8m4 4 4-4m-4 4-4 4'
		/>
	</svg>
)
export default CloseIcon
