# Dota2GSI TypeScript Conversion

This directory contains the TypeScript conversion of the Dota2GSI classes. The conversion provides type safety and modern JavaScript/TypeScript features for working with Dota 2 Game State Integration (GSI) data.

## Structure

### Base Classes
- **Node**: The base class for all GSI state classes, providing JSON parsing utilities
- **NodeMap**: A Map implementation with additional utility methods
- **NodeList**: An Array implementation with additional utility methods

### Enums
- **PlayerTeam**: Enum for player teams (Radiant, Dire, Neutrals, etc.)
- **RoshanState**: Enum for Roshan's current state
- **DOTA_GameState**: Enum for game states
- **PlayerActivity**: Enum for player activities

### Core Classes
- **GameState**: The main class representing the complete game state
- **Auth**: Authentication information for GSI
- **Provider**: Information about the GSI provider
- **Map**: Information about the current map and game state
- **Player**: Player information including local and team players
- **PlayerDetails**: Detailed player statistics and information

### Game Component Classes
- **Hero**: Hero information (placeholder implementation)
- **Abilities**: Hero abilities information (placeholder implementation)
- **Items**: Hero items information (placeholder implementation)
- **Events**: Game events information (placeholder implementation)
- **Buildings**: Building information (placeholder implementation)
- **League**: League information (placeholder implementation)
- **Draft**: Draft information (placeholder implementation)
- **Wearables**: Wearable items information (placeholder implementation)
- **Minimap**: Minimap information (placeholder implementation)
- **Roshan**: Roshan information (placeholder implementation)
- **Couriers**: Courier information (placeholder implementation)
- **NeutralItems**: Neutral items information (placeholder implementation)

### Helper Classes
- **Vector2D**: 2D vector representation
- **FullPlayerDetails**: Complete player information composed from GameState data

## Usage

```typescript
import { GameState } from './typescript';

// Create a GameState instance from JSON data
const gameState = new GameState(jsonData);

// Access various game information
console.log(gameState.map.name);
console.log(gameState.player.localPlayer.name);

// Check if spectating or playing
if (gameState.isSpectating) {
    console.log('Currently spectating');
} else if (gameState.isLocalPlayer) {
    console.log('Currently playing');
}

// Access local player details
const localPlayer = gameState.localPlayer;
console.log(localPlayer.details.kills);
```

## Implementation Status

### Fully Implemented
- Base Node class with JSON parsing utilities
- Enums (PlayerTeam, RoshanState, DOTA_GameState, PlayerActivity)
- Auth class
- Provider class
- Map class
- Player class
- PlayerDetails class
- Vector2D helper class
- FullPlayerDetails helper class
- GameState main class

### Placeholder Implementations
The following classes are implemented as minimal placeholders and need full implementation:
- Hero
- Abilities
- Items
- Events
- Buildings
- League
- Draft
- Wearables
- Minimap
- Roshan
- Couriers
- NeutralItems

## Recent Changes

- **Simplified toString() methods**: Reduced verbose output to essential information
- **Removed redundant getLong() method**: JavaScript numbers can handle large integers
- **Simplified placeholder classes**: Removed unnecessary complexity from placeholder implementations
- **Updated FullPlayerDetails**: Modified to work with simplified placeholder classes
- **Removed C#-specific patterns**: Eliminated hashCode, equals methods, and other C#-isms for cleaner TypeScript code

## TODO

1. **Implement Full HeroDetails**: Complete the Hero class with full HeroDetails implementation including:
   - Hero location, stats, abilities
   - Talent tree
   - Hero states (silenced, stunned, etc.)
   - Aghanim's upgrades

2. **Implement Abilities**: Complete the Abilities class with ability details, cooldowns, and levels

3. **Implement Items**: Complete the Items class with item details, charges, and cooldowns

4. **Implement Events**: Complete the Events class with game event parsing

5. **Implement Buildings**: Complete the Buildings class with building health and status

6. **Implement League**: Complete the League class with tournament information

7. **Implement Draft**: Complete the Draft class with draft phase information

8. **Implement Wearables**: Complete the Wearables class with cosmetic item information

9. **Implement Minimap**: Complete the Minimap class with minimap element information

10. **Implement Roshan**: Complete the Roshan class with Roshan status and timer information

11. **Implement Couriers**: Complete the Couriers class with courier information

12. **Implement NeutralItems**: Complete the NeutralItems class with neutral item information

13. **Implement FullTeamDetails**: Create the FullTeamDetails class for team-level information

## Notes

- The TypeScript conversion provides idiomatic TypeScript patterns and type safety
- All classes extend the base Node class for consistent JSON parsing
- Placeholder classes use `any` types and should be replaced with proper interfaces as they are implemented
- The codebase follows TypeScript best practices and conventions

## TypeScript Configuration

To use these classes, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
``` 