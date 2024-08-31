import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_4O_AZ = 'gpt-4o-2024-05-13',
  GPT_4O_MINI_AZ = 'gpt-4o-mini-2024-07-18',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4O_MINI_AZ;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_4O_MINI_AZ]: {
    id: OpenAIModelID.GPT_4O_MINI_AZ,
    name: 'GPT-4o mini',
    maxLength: 512000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4O_AZ]: {
    id: OpenAIModelID.GPT_4O_AZ,
    name: 'GPT-4o',
    maxLength: 512000,
    tokenLimit: 128000,
  },
};
