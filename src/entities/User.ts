import { Column, CreateDateColumn, Entity, PrimaryColumn, Unique, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
@Unique('UQ_NAMES', ['email'])
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  email: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  update_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
