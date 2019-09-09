import 'jest-preset-angular';

import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Logan, LoganLogLevel } from '@logan/core';

import { NgLoganModule, Loganify, LoganifyMethod, LoganifyClass } from '..';

describe('@logan/angular', () => {
  const console = global.console;

  Logan.setGlobalTitle('global title');

  describe('Loganify', () => {
    it('should decorate class property and give access to the Logan', () => {
      // Arrange
      const spy = jest.spyOn(console, 'log');

      @Component({ template: '' })
      class LoganifiedComponent {
        @Loganify({ title: 'local title' }) logger!: Logan;
      }

      // Act
      TestBed.configureTestingModule({
        imports: [NgLoganModule.forRoot()],
        declarations: [LoganifiedComponent]
      });

      const fixture = TestBed.createComponent(LoganifiedComponent);
      fixture.componentInstance.logger.log('message');

      try {
        // Assert
        expect(spy).toHaveBeenCalledWith('[global title::local title]', 'message');
      } finally {
        spy.mockRestore();
      }
    });
  });

  describe('LoganifyMethod', () => {
    it('should decorate method and print parameters and result', () => {
      // Arrange
      const spy = jest.spyOn(console, 'log');

      @Component({ template: '' })
      class LoganifiedComponent {
        @LoganifyMethod(LoganLogLevel.Log)
        sum(number1: number, number2: number) {
          return number1 + number2;
        }
      }

      // Act
      TestBed.configureTestingModule({
        imports: [NgLoganModule.forRoot()],
        declarations: [LoganifiedComponent]
      });

      const fixture = TestBed.createComponent(LoganifiedComponent);
      fixture.componentInstance.sum(4, 5);

      try {
        // Assert
        expect(spy).toHaveBeenCalledWith(
          '[global title]',
          'LoganifiedComponent - sum - parameters: ',
          [4, 5]
        );

        expect(spy).toHaveBeenCalledWith(
          '[global title]',
          'LoganifiedComponent - sum - result: ',
          9
        );
      } finally {
        spy.mockRestore();
      }
    });

    it('should decorate method and use local logan', () => {
      // Arrange
      const spy = jest.spyOn(console, 'log');

      @Component({ template: '' })
      class LoganifiedComponent {
        @Loganify({ title: 'local title' }) logan!: Logan;

        @LoganifyMethod(LoganLogLevel.Log)
        cube(number: number): number {
          return number ** 3;
        }
      }

      // Act
      TestBed.configureTestingModule({
        imports: [NgLoganModule.forRoot()],
        declarations: [LoganifiedComponent]
      });

      const fixture = TestBed.createComponent(LoganifiedComponent);

      // Invoke getter
      fixture.componentInstance.logan;
      fixture.componentInstance.cube(5);

      try {
        // Assert
        expect(spy).toHaveBeenCalledWith(
          '[global title::local title]',
          'LoganifiedComponent - cube - parameters: ',
          [5]
        );

        expect(spy).toHaveBeenCalledWith(
          '[global title::local title]',
          'LoganifiedComponent - cube - result: ',
          125
        );
      } finally {
        spy.mockRestore();
      }
    });
  });

  describe('LoganifyClass', () => {
    it('should decorate class and proxy method calls', () => {
      // Arrange
      const spy = jest.spyOn(console, 'log');

      @LoganifyClass(LoganLogLevel.Log)
      @Component({ template: '' })
      class LoganifiedComponent {
        square(number: number): number {
          return number ** 2;
        }
      }

      // Act
      TestBed.configureTestingModule({
        imports: [NgLoganModule.forRoot()],
        declarations: [LoganifiedComponent]
      });

      const fixture = TestBed.createComponent(LoganifiedComponent);

      fixture.componentInstance.square(4);

      try {
        // Assert
        expect(spy).toHaveBeenCalledWith(
          '[global title]',
          'LoganifiedComponent - square - parameters: ',
          [4]
        );

        expect(spy).toHaveBeenCalledWith(
          '[global title]',
          'LoganifiedComponent - square - result: ',
          16
        );
      } finally {
        spy.mockRestore();
      }
    });

    it('should decorate class and use local logan', () => {
      // Arrange
      const spy = jest.spyOn(console, 'log');

      @LoganifyClass(LoganLogLevel.Log)
      @Component({ template: '' })
      class LoganifiedComponent {
        @Loganify({ title: 'local title' }) logan!: Logan;

        cube(number: number): number {
          return number ** 3;
        }
      }

      // Act
      TestBed.configureTestingModule({
        imports: [NgLoganModule.forRoot()],
        declarations: [LoganifiedComponent]
      });

      const fixture = TestBed.createComponent(LoganifiedComponent);

      // Invoke getter
      fixture.componentInstance.logan;
      fixture.componentInstance.cube(5);

      try {
        // Assert
        expect(spy).toHaveBeenCalledWith(
          '[global title::local title]',
          'LoganifiedComponent - cube - parameters: ',
          [5]
        );

        expect(spy).toHaveBeenCalledWith(
          '[global title::local title]',
          'LoganifiedComponent - cube - result: ',
          125
        );
      } finally {
        spy.mockRestore();
      }
    });

    it('should decorate class and proxy base class method', () => {
      // Arrange
      const spy = jest.spyOn(console, 'log');

      class BaseLoganifiedComponent {
        square(number: number): number {
          return number ** 2;
        }
      }

      @LoganifyClass(LoganLogLevel.Log)
      @Component({ template: '' })
      class LoganifiedComponent extends BaseLoganifiedComponent {}

      // Act
      TestBed.configureTestingModule({
        imports: [NgLoganModule.forRoot()],
        declarations: [LoganifiedComponent]
      });

      const fixture = TestBed.createComponent(LoganifiedComponent);

      fixture.componentInstance.square(4);

      try {
        // Assert
        expect(spy).toHaveBeenCalledWith(
          '[global title]',
          'LoganifiedComponent - square - parameters: ',
          [4]
        );

        expect(spy).toHaveBeenCalledWith(
          '[global title]',
          'LoganifiedComponent - square - result: ',
          16
        );
      } finally {
        spy.mockRestore();
      }
    });
  });
});
