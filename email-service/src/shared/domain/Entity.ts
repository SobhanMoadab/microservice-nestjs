import { randomUUID } from 'crypto'

export abstract class Entity<T>{
    private _id: string
    public props: T

    constructor(props: T, _id?: string) {
        this.props = props
        this._id = _id ?? randomUUID()
    }


}