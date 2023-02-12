import { ActionIcon, Group, Input, Popover } from '@mantine/core'
import { ChangeEvent } from 'react'
import { Icon } from 'shared/ui'
import { useStyles } from './useStyles'

interface IProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
	onChange: (opened: boolean) => void
	onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
	onSubmit: () => void
	label: string
	originalLabel: string
}

const UpdatePopover = ({
	isOpen,
	onClose,
	onOpen,
	onChange,
	onInputChange,
	onSubmit,
	label,
	originalLabel,
}: IProps) => {
	const { classes, cx } = useStyles()

	return (
		<Popover
			width={180}
			withArrow
			opened={isOpen}
			onChange={onChange}
			trapFocus
		>
			<Popover.Target>
				<ActionIcon
					className={cx(classes.badgeActionsCommon, classes.updateBadge)}
					size="xs"
					onClick={onOpen}
					data-testid="update-badge"
				>
					<Icon icon="edit" />
				</ActionIcon>
			</Popover.Target>
			<Popover.Dropdown>
				<form
					onSubmit={e => {
						e.preventDefault()

						onSubmit()
					}}
				>
					<Input
						value={label}
						onChange={onInputChange}
						placeholder="Обновленный текст"
						data-testid="update-badge-input"
					/>

					<Group position="center" spacing="xs" noWrap>
						<ActionIcon
							color="green"
							type="submit"
							data-testid="update-badge-submit"
							disabled={label === originalLabel || !label.trim()}
						>
							<Icon icon="done" />
						</ActionIcon>
						<ActionIcon
							onClick={onClose}
							data-testid="update-badge-close"
							color="red"
						>
							<Icon icon="close" />
						</ActionIcon>
					</Group>
				</form>
			</Popover.Dropdown>
		</Popover>
	)
}

export default UpdatePopover
