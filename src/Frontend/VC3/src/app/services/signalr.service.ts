import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserInfo } from '../interfaces/user';
import { SignalInfo } from '../interfaces/signalr';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  constructor() { }

    public async startConnection(currentUser: string): Promise<void> {

    }
}
