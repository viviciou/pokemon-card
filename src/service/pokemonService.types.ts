export type PokemonNameAndUrl = {
  name: string;
  url: string;
};
type Ability = {
  name: string;
  url: string;
};
type Abilities = {
  ability: Ability | null;
  is_hidden: boolean;
  slot: number;
};
type Cries = {
  latest: string;
  legacy: string;
};
type Forms = { name: string; url: string };
type GameIndice = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};
type GameIndices = GameIndice[];
type HeldItems = any;
type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  order: number | null;
  version_group: {
    name: string;
    url: string;
  };
};
type Moves = {
  move: { name: string; url: string };
  version_group_details: VersionGroupDetail[];
};
type PastAbility = {
  abilities: Abilities;
  generation: {
    name: string;
    url: string;
  };
};
type PastAbilities = PastAbility[];
type Species = {
  name: string;
  url: string;
};

type DefaultSprites = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
};

type SpritesOther = {
  dream_world: Pick<DefaultSprites, "front_default" | "front_female">;
  home: Pick<
    DefaultSprites,
    "front_default" | "front_female" | "front_shiny" | "front_shiny_female"
  >;
  [`official-artwork`]: Pick<DefaultSprites, "front_default" | "front_shiny">;
  showdown: Pick<DefaultSprites, "front_default" | "front_female">;
};

type GenerationVersion = {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
};

type SpritesVersions = {
  [`generation-i`]: {
    red_blue: GenerationVersion;
    yellow: GenerationVersion;
  };
  [`generation-ii`]: {
    crystal: GenerationVersion;
    gold: GenerationVersion;
    silver: GenerationVersion;
  };
  [`generation-iii`]: {
    emerald: GenerationVersion;
    firered_leafgreen: GenerationVersion;
  };
  [`generation-iv`]: {
    diamond_pearl: GenerationVersion;
    heartgold_soulsilver: GenerationVersion;
    platinum: GenerationVersion;
  };
  [`generation-v`]: {
    black_white: GenerationVersion;
  };
  [`generation-vi`]: {
    omegaruby_alphasapphire: GenerationVersion;
    x_y: GenerationVersion;
  };
  [`generation-vii`]: {
    icons: Pick<DefaultSprites, "front_default" | "front_female">;
    [`ultra-sun-ultra-moon`]: Pick<
      DefaultSprites,
      "front_default" | "front_female" | "front_shiny" | "front_shiny_female"
    >;
  };
  [`generation-viii`]: {
    icons: Pick<DefaultSprites, "front_default" | "front_female">;
  };
};

type Sprites = DefaultSprites & {
  other: SpritesOther;
  versions: SpritesVersions;
};

type Stats = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

type Type = {
  slot: number;
  type: { name: string; url: string };
};

export type PokemonDetail = {
  abilities: Abilities[];
  base_experience: number;
  cries: Cries;
  forms: Forms[];
  game_indices: GameIndices;
  height: number;
  held_items: HeldItems;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves;
  name: string;
  order: number;
  past_abilities: PastAbilities;
  past_types: Type[];
  species: Species;
  sprites: Sprites;
  stats: Stats[];
  types: Type[];
  weight: number;
};
