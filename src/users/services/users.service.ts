import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
/**
 * Class to connect to users table and perform bussiness operations
 */
@Injectable()
export class UsersService {
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
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
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
