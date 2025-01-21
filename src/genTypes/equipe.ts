import { Media } from './media';

export interface Equipe {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  Cargo: string;
  Aniversario?: Date | string;
  email?: string;
  bio?: string;
  perfil?: Media | null;
};
