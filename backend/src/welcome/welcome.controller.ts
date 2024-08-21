import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class WelcomeController {
  @Get()
  getWelcome(): { message: string, developer: {} } {
    return {
      message: 'Welcome to the challenge-bt API',
      developer: {
        name: 'Lucas Matias Manzon',
        email: 'manzonlucasm@gmail.com',
      }
    }
  }
}
