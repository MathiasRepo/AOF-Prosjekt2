import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export const Navigation = () => {
  return (
    <header className="fixed w-full top-0 bg-hubBlue-dark/80 backdrop-blur-md border-b border-hubBlue/30 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo section - left aligned */}
          <div className="w-32">
            <a href="/" className="text-hubBlue-light font-bold text-xl">
              HUB Phønix
            </a>
          </div>

          {/* Main navigation - centered */}
          <NavigationMenu className="flex-1 flex justify-center">
            <NavigationMenuList className="bg-hubBlue-dark/50">
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#om-oss">
                  Om oss
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#tjenester">
                  Tjenester
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#ressurser">
                  Ressurser
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#booking">
                  Booking
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#nyhetsbrev">
                  Nyhetsbrev
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#kontakt">
                  Kontakt
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Empty space for balance */}
          <div className="w-32"></div>
        </div>
      </div>
    </header>
  );
};
