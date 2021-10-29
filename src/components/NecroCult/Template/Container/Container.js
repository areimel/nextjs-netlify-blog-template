import styles from './Container.module.scss'

export default function Container({ 
	children,
	containerSize, 
	flex,
}) {
  return (
      <div className={ styles.container + (flex ? ' '+styles.flex: '') }>
        {children}
      </div>
  )
}
