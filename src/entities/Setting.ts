import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('settings', { synchronize: true })
@Unique('UQ_NAMES', ['username'])
export class Setting {
  @PrimaryColumn()
  id?: string

  @Column()
  username!: string

  @Column()
  chat?: boolean

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at?: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
