import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ path: 'dynamic-host-routing', host: ':account.example.com' })
export class DynamicHostRoutingController {
  // Allows the application to handle requests based on varying subdomains
  // Add a host parameter to the route if using postman or any other tool
  // host  -  idk.example.com ( accepts subdomain if ends with .example.com )

  @Get()
  get(@HostParam('account') account: string) {
    return `Hello ${account}!`;
  }
}
