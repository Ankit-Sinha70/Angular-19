import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare global {
  interface Window {
    Composio: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ComposioService {
  private composio: any;
  private accessTokenSubject = new BehaviorSubject<string | null>(null);
  accessToken$ = this.accessTokenSubject.asObservable();

  constructor() {
    this.waitForComposio().then(() => this.initialize());
  }

  private waitForComposio(retries = 10): Promise<void> {
    return new Promise((resolve, reject) => {
      const checkComposio = () => {
        if (window.Composio) {
          resolve();
          return;
        }

        if (retries === 0) {
          reject(new Error('Composio SDK not found after multiple retries'));
          return;
        }

        retries--;
        setTimeout(checkComposio, 500);
      };

      checkComposio();
    });
  }

  private initialize(): void {
    try {
      this.composio = window.Composio;
      console.log('✅ Composio initialized');
    } catch (error) {
      console.error('❌ Failed to initialize Composio:', error);
    }
  }

  sendEmail(to: string, subject: string, body: string): Promise<any> {
    if (!this.composio) {
      throw new Error('Composio not initialized');
    }

    const composioClient = new this.composio.ComposioClient({
      clientId: 'gdbgydm96olrhpemwnkms'
    });

    return composioClient.sendEmail({
      to,
      subject,
      body
    });
  }

  mountGmailButton(elementId: string): void {
    if (!this.composio) {
      console.error('❌ Composio not initialized');
      return;
    }

    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`❌ Element with id ${elementId} not found`);
      return;
    }

    const composioClient = new this.composio.ComposioClient({
      clientId: 'gdbgydm96olrhpemwnkms'
    });

    composioClient.mountButton({
      element,
      provider: 'gmail',
      onSuccess: (data: any) => {
        console.log('✅ Gmail connected:', data);
        this.accessTokenSubject.next(data.access_token);
      },
      onError: (err: any) => {
        console.error('❌ Gmail connection failed:', err);
      }
    });
  }
}
