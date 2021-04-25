import {
  PrimaryColumn,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('messages')
export class Message {
  @PrimaryColumn()
  id: string

  @Column({ name: 'admin_id', nullable: true })
  adminId: string

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User

  @Column({ name: 'user_id' })
  userId: string

  @Column()
  text: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
