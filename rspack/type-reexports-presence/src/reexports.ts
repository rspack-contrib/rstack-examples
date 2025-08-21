// Should not report ESModulesLinkingWarning since we configured `typeReexportsPresence: "tolerant"`
// case 1:
export { TypeA } from './types';
// case 2:
import { TypeB } from './types';
export { TypeB };
