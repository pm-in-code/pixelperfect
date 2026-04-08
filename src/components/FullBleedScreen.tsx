import type { ReactNode } from 'react'
import { assetPath } from '../utils/assetPath'
import styles from './FullBleedScreen.module.css'

export function FullBleedScreen({
  imageSrc,
  alt = '',
  children,
}: {
  imageSrc: string
  alt?: string
  children?: ReactNode
}) {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={assetPath(imageSrc)} alt={alt} />
      <div className={styles.overlay}>{children}</div>
    </div>
  )
}
