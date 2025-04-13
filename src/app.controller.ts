import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/**
 * AppController class handles HTTP requests related to the application.
 * It provides a health check endpoint.
 */
@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}
}
