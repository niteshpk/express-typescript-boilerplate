declare module 'interfaces' {

    import { myExpress } from 'my-express';

    interface Middleware {
        use(req: myExpress.Request, res: myExpress.Response, next: myExpress.NextFunction): void;
    }

    interface Listener {
        act<T>(value?: T): void;
        act(...args: any[]): void;
    }

    interface Configurable {
        configure<T>(instance: T): void;
    }
}
