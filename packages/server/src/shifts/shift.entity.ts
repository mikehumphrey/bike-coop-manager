import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Shift} from '../../../common/src';
import {MemberEntity} from '../members/member.entity';
import {ShiftAssignmentEntity} from './shift-assignment.entity';

@Entity({name: 'shifts'})
export class ShiftEntity implements Shift {
  @PrimaryGeneratedColumn('uuid', {name: 'id'})
  id!: string;

  @Column({type: 'timestamptz', name: 'starts_at'})
  startsAt!: Date;

  @Column({type: 'timestamptz', name: 'ends_at'})
  endsAt!: Date;

  @Column({type: 'uuid', name: 'shift_term_id'})
  shiftTermId!: string;

  @ManyToMany(() => MemberEntity, (member) => member.shifts)
  members?: MemberEntity[];

  @OneToMany(
    () => ShiftAssignmentEntity,
    (shiftAssignment) => shiftAssignment.shift,
  )
  shiftAssignments?: ShiftAssignmentEntity[];
}