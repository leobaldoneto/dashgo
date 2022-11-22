import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkPros extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkPros) {
  const { asPath } = useRouter();
  let isActive = false;

  if(shouldMatchExactHref && asPath == rest.href){
    isActive = true;
  }

  if(!shouldMatchExactHref && asPath.startsWith(String(rest.href))) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, { 
        color: isActive ? 'pink.400' : 'gray.50'
        })}
    </Link>
  )

}