import { Test } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('devrait retourner "Hello World!"', () => {
    expect(appController.getHello()).toBe('Hello World!');
  });
});
