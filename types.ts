import React from 'react';

export type PageView = 'home' | 'privacy';

export interface NavItem {
  label: string;
  href: string; // Used for anchors like #services
  action?: PageView; // Used for view switching
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatData {
  name: string;
  value: number;
}