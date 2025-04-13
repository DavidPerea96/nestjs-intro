import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
/**
 * Class to connect to users table and perform bussiness operations
 */
@Injectable()
export class UsersService {

  constructor(
    /**
     * Injecting the TypeORM repository for the User entity.
     * This allows us to perform CRUD operations on the users table.
     * @param usersRepository - The TypeORM repository for the User entity.
     */
    @InjectRepository(User)
    private usersRepository:Repository<User>,
    /**
     * Injecting the AuthService to handle authentication-related operations.
     * This is done using forwardRef to avoid circular dependency issues.
     * @param authService - The AuthService instance.
     */
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ){}

  public async createUser(createUserDto:CreateUserDto) {
    //Check if user already exists using email.
    const existingUser = await this.usersRepository.findOne({
      where: {
        email: createUserDto.email,
      }
    });
    //Handle exception if user already exists.
    // Stores new user on a variable.
    let newUser = this.usersRepository.create(createUserDto);
    // Saves the new user to the database.
    newUser = await this.usersRepository.save(newUser);
    // Return the newly created user.
    return newUser;
  }

  /**
   * Fetches a list of all users.
   * @returns An array of user objects, each containing the user's first name and email.
   */
  public getAllUsers() {
    return [
      {
        fistName: 'John',
        email: 'jhon@doe.com',
      },
      {
        fistName: 'Jane',
        email: 'jane@doe.com',
      },
    ];
  }
  /**
   * Return user basen on userId
   * @param userId - The ID of the user to fetch.
   * @returns An object containing the user's ID, first name, and email.
   * @throws Error if the user is not authenticated.
   * @throws Error if the user is not found or authenticated.
  */
  public getUserById(userId: string) {
    /** 
     * Check if the user is authenticated. If not, throw an error.
     * This is a placeholder for actual authentication logic.
     */
    if (!this.authService.isAuth()) {
      throw new Error('User is not authenticated');
    } else {
      return {
        id: 1234,
        fistName: 'Alice',
        email: 'alice@doe.com',
      };
    }
  }
}
