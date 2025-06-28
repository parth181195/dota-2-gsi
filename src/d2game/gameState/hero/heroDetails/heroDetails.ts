import { HeroDetailsI, HeroState, TalentTreeSpec, Vector2D } from './heroDetails.type';
import { Node } from '../../node';
import { checkTalentTreeRegexp } from '../../../../constants/matchers';

export class HeroDetails extends Node implements HeroDetailsI {
  attributesLevel: number;
  buybackCooldown: number;
  buybackCost: number;
  experience: number;
  facet: number;
  hasAghanimsScepterUpgrade: boolean;
  hasAghanimsShardUpgrade: boolean;
  health: number;
  healthPercent: number;
  heroState: HeroState[] = [];
  id: number;
  isAlive: boolean;
  isMuted: boolean;
  level: number;
  location: Vector2D;
  mana: number;
  manaPercent: number;
  maxHealth: number;
  maxMana: number;
  name: string;
  secondsToRespawn: number;
  selectedUnit: boolean;
  talentTree: TalentTreeSpec[];

  constructor(json: any) {
    super(json);
    this.attributesLevel = this.getInt('attributes_level');
    this.buybackCooldown = this.getInt('buyback_cooldown');
    this.buybackCost = this.getInt('buyback_cost');
    this.experience = this.getInt('experience');
    this.hasAghanimsScepterUpgrade = this.getBool('has_aghanims_scepter_upgrade');
    this.hasAghanimsShardUpgrade = this.getBool('has_aghanims_shard_upgrade');
    this.health = this.getInt('health');
    this.healthPercent = this.getInt('health_percent');
    this.id = this.getInt('id');
    this.isAlive = this.getBool('is_alive');
    this.isMuted = this.getBool('is_muted');
    this.level = this.getInt('level');
    this.location = {
      x: this.getFloat('xpos'),
      y: this.getFloat('ypos'),
    };
    this.mana = this.getInt('mana');
    this.manaPercent = this.getInt('mana_percent');
    this.maxHealth = this.getInt('max_health');
    this.maxMana = this.getInt('max_mana');
    this.name = this.getString('name');
    this.secondsToRespawn = this.getInt('seconds_to_respawn');
    this.selectedUnit = this.getBool('selected_unit');
    this.facet = this.getInt('facet');
    this.talentTree = this.parseTalentTree(this.data) || [];
    if (this.getBool('muted')) {
      this.heroState.push(HeroState.MUTED);
    }
    if (this.getBool('silenced')) {
      this.heroState.push(HeroState.SILENCED);
    }
    if (this.getBool('stunned')) {
      this.heroState.push(HeroState.STUNNED);
    }
    if (this.getBool('disarmed')) {
      this.heroState.push(HeroState.DISARMED);
    }
    if (this.getBool('magicimmune')) {
      this.heroState.push(HeroState.MAGIC_IMMUNE);
    }
    if (this.getBool('hexed')) {
      this.heroState.push(HeroState.HEXED);
    }
    if (this.getBool('break')) {
      this.heroState.push(HeroState.BROKEN);
    }
    if (this.getBool('smoked')) {
      this.heroState.push(HeroState.SMOKED);
    }
    if (this.getBool('has_debuff')) {
      this.heroState.push(HeroState.DEBUFFED);
    }

  }

  protected parseTalentTree(data: any): TalentTreeSpec[] {
    const talentKeys = this.getMatchingKeys(data, checkTalentTreeRegexp);
    if (talentKeys && talentKeys.length == 8) {
      const talentTree = [
        TalentTreeSpec.NONE,
        TalentTreeSpec.NONE,
        TalentTreeSpec.NONE,
        TalentTreeSpec.NONE,
      ];

      talentTree.forEach((spec, i) => {
        const index = i + 1;
        const leftIndex = index * 2;
        const rightIndex = (index * 2) - 1;
        const leftTaken = this.getBool(`talent_${leftIndex}`);
        const rightTaken = this.getBool(`talent_${rightIndex}`);
        if (leftTaken && !rightTaken) {
          talentTree[i] = TalentTreeSpec.LEFT;
        } else if (!leftTaken && rightTaken) {
          talentTree[i] = TalentTreeSpec.RIGHT;
        } else if (leftTaken && rightTaken) {
          talentTree[i] = TalentTreeSpec.BOTH;
        }
      });
      return talentTree;
    }
    return [];
  }
}