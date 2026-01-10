/**
 * Logger service for mocking demonstration
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  metadata?: Record<string, unknown>;
}

export class Logger {
  private name: string;
  private entries: LogEntry[] = [];

  constructor(name: string) {
    this.name = name;
  }

  private createEntry(
    level: LogLevel,
    message: string,
    metadata?: Record<string, unknown>,
  ): LogEntry {
    const entry: LogEntry = {
      level,
      message: `[${this.name}] ${message}`,
      timestamp: new Date(),
      metadata,
    };
    this.entries.push(entry);
    return entry;
  }

  debug(message: string, metadata?: Record<string, unknown>): void {
    const entry = this.createEntry('debug', message, metadata);
    console.debug(entry.message, metadata);
  }

  info(message: string, metadata?: Record<string, unknown>): void {
    const entry = this.createEntry('info', message, metadata);
    console.info(entry.message, metadata);
  }

  warn(message: string, metadata?: Record<string, unknown>): void {
    const entry = this.createEntry('warn', message, metadata);
    console.warn(entry.message, metadata);
  }

  error(message: string, metadata?: Record<string, unknown>): void {
    const entry = this.createEntry('error', message, metadata);
    console.error(entry.message, metadata);
  }

  getEntries(): LogEntry[] {
    return [...this.entries];
  }

  clear(): void {
    this.entries = [];
  }
}

// Default logger instance
export const logger = new Logger('App');
