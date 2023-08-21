const targetSelectors = [{
  target: "@p",
  value: "@p",
  description: "Targets the nearest player"
},
{
  target: "@r",
  value: "@r",
  description: "Targets a random player"
},
{
  target: "@a",
  value: "@a",
  description: "Targets all players"
},
{
  target: "@e",
  value: "@e",
  description: "Targets all entities"
},
{
  target: "@s",
  value: "@s",
  description: "Targets the entity executing the command"
}];

const targetSelectorArguments = [{
  name: "advancements",
  displayName: "Advancements",
  description: "selects entities with a certain advancement"
},
{
  name: "distance",
  displayName: "Distance",
  description: "selects entities within the specified distance"

},
{
  name: "dx",
  displayName: "X Distance",
  description: "selects entities within a certain X distance of the origin"

},
{
  name: "dy",
  displayName: "Y Distance",
  description: "selects entities within a certain Y distance of the origin"

},
{
  name: "dz",
  displayName: "Z Distance",
  description: "selects entities within a certain Z distance of the origin"

},
{
  name: "gamemode",
  displayName: "Gamemode",
  description: "selects entities with or without the specified gamemode"

},
{
  name: "level",
  displayName: "Level",
  description: "selects entities with a certain amount of experience levels"

},
{
  name: "limit",
  displayName: "Limit",
  description: "selects a certain number of entities"

},
{
  name: "name",
  displayName: "Name",
  description: "selects entities with the specified name"

},
{
  name: "nbt",
  displayName: "NBT Data",
  description: "selects entities with a certain NBT tag"

},
{
  name: "predicate",
  displayName: "Predicate",
  description: "selects entities with a certain predicate"

},
{
  name: "scores",
  displayName: "Scores",
  description: "selects entities with a certian score in a scoreboard objective"

},
{
  name: "sort",
  displayName: "Sort",
  description: "sorts entities arbitrarily, randomly, closest first, or farthest first"

},
{
  name: "tag",
  displayName: "Tag",
  description: "selects entities with a certain scoreboard tag"

},
{
  name: "team",
  displayName: "Team",
  description: "selects entities on a team"

},
{
  name: "type",
  displayName: "Type",
  description: "selects a certain type of entity"

},
{
  name: "x",
  displayName: "X Position",
  description: "selects entities in the specified x location"

},
{
  name: "x_rotation",
  displayName: "X Rotation",
  description: "selects entities with the specified x rotation"

},
{
  name: "y",
  displayName: "Y Position",
  description: "selects entities in the specified y location"

},
{
  name: "y_rotation",
  displayName: "Y Rotation",
  description: "selects entities with the specified y rotation"

},
{
  name: "z",
  displayName: "Z Position",
  description: "selects entities in the specified z location"

}];