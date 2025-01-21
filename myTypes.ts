
export interface ArrayAutores {
  id?: number;
  nome: string;
};

export interface ArrayEmail {
  id?: number;
  email?: string;
};

export interface Artigo {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  titulo: string;
  resumo: string;
  autores: ArrayAutores[] | null;
  fotos?: Media | null;
  linkPublicacao: string;
  tituloEN: string;
  resumoEN: string;
};

export interface Equipe {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  nome: string;
  tituloCargo: string;
  tituloCargoEN: string;
  bio: string;
  bioEN?: string;
  photo?: Media | null;
  areaAtuacao?: string;
  areaAtuacaoEN: string;
  telefone?: string;
  cargo: "professor" | "professor_convidado" | "estudante";
  nivelEstudo?: "graduação" | "mestrado" | "doutorado";
  lattes?: string;
  orcid?: string;
  email?: ArrayEmail[] | null;
};

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  role: Role | null | number;
};

export interface Role {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description: string;
  type: string;
};

export interface FindOne<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};

export interface FindMany<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};
