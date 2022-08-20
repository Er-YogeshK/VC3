import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Instance } from 'simple-peer';
import { UserInfo } from '../interfaces/user';
import { PeerData } from '../interfaces/signalr';

declare var SimplePeer: any;

@Injectable({
  providedIn: 'root'
})
export class RtcService {

  constructor() {
  }
  
}
