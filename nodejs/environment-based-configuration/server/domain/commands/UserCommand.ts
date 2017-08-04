import {UserRepository} from "./../../repository/UserRepository";
import {User} from "./../../model/interfaces/User";
import { UserModel, UserSchemaModel} from "./../../dataAccess/schemas/UserSchema"

export class UserCommand {
    private userRepository: UserRepository;
    
    constructor () {
        this.userRepository = new UserRepository();
    }

    create (item: UserModel, callback: (error: any, result: any) => void) {
        this.userRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this.userRepository.retrieve(callback);
    }

}