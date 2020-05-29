/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|


 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE UserBase PLEASE EDIT ../user.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
import { Ecografia } from '../ecografia';

/**
 * This is the model of User object
 *
 */
export class UserBase {

    constructor() { }

    public _id: string;
    public mail?: string;
    public name?: string;
    public password: string;
    public roles?: string[];
    public surname?: string;
    public username: string;
    // Relations _UserEcografia
    public _UserEcografia: Ecografia | string;
}
