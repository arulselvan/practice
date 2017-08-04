import { User } from "./../model/interfaces/User";
import { Repository } from './Repository';
import { UserModel, UserSchemaModel} from "./../dataAccess/schemas/UserSchema"

export class UserRepository extends Repository<UserModel> {
    constructor () {
        super(UserSchemaModel);
    }
}