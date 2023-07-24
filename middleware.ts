import { authMiddleware } from '@clerk/nextjs';

/**
 * authMiddleware 를 통해 인증되지 않은 페이지에 대한 접근을 방어하고 redirect 함
 * 혹은 public 으로 인증이 필요없는 페이지에 대한 설정도 가능
 */
export default authMiddleware({});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
};
