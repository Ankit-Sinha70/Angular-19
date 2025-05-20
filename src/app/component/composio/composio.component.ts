import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Composio: any;

@Component({
  selector: 'app-gmail-connect',
  templateUrl: './composio.component.html',
  imports: [CommonModule],
  standalone: true
})
export class GmailConnectComponent implements OnInit {
  composio: any;
  isLoading = true;
  error: string | null = null;

  ngOnInit() {
    this.loadComposioScript();
  }

  private loadComposioScript() {
    const existingScript = document.querySelector('script[src*="composio"]');
    if (existingScript) {
      this.isLoading = false;
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@composio/sdk@latest/dist/composio.umd.js';
    script.async = true;
    script.onload = () => {
      this.isLoading = false;
      this.error = null;
    };
    script.onerror = () => {
      this.isLoading = false;
      this.error = 'Failed to load Composio SDK';
    };
    document.body.appendChild(script);
  }

  connectGmail() {
    if (this.isLoading) {
      console.log('Composio SDK is still loading...');
      return;
    }

    if (this.error) {
      console.error('Cannot connect: ' + this.error);
      return;
    }

    try {
      if (!this.composio) {
        this.composio = new Composio({
          clientId: 'app_demo_1234567890',
          userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGVzdF91c2VyXzEyMyJ9.Gs4H4j59cFAsLyzU9Dn_YfZhkYc0-PS9fH-wRMis3Hg',
          parentElementId: 'gmail-widget',
        });
      }

      this.composio.mount({
        connectorId: 'gmail',
        integrationMode: 'popup',
      });
    } catch (err) {
      console.error('Error initializing Composio:', err);
      this.error = 'Failed to initialize Composio';
    }
  }
}
