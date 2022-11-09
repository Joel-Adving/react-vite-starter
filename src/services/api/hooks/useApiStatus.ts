import { useState, useMemo } from 'react';
import { IDLE, defaultApiStatuses, ApiStatus } from '@/services/api/constants/apiStatus';
import { capitalize } from '@/utils/helpers';

type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>;

function prepareStatuses(currentStatus: ApiStatus): Statuses {
  const statuses = {} as Statuses;

  for (const status of defaultApiStatuses) {
    const normalisedStatus = capitalize(status.toLowerCase());
    const normalisedStatusKey = `is${normalisedStatus}` as keyof Statuses;
    statuses[normalisedStatusKey] = status === currentStatus;
  }

  return statuses;
}

export function useApiStatus(currentStatus: ApiStatus = IDLE) {
  const [status, setStatus] = useState<ApiStatus>(currentStatus);
  const statuses = useMemo(() => prepareStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
}
