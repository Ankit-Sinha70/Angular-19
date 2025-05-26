import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("angular-19-token");
   const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  return next(newReq);
};
