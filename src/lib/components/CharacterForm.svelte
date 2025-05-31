<script>
    export let character = {};
    export let classList = [];
    export let speciesList = [];
    export let submitLabel = "Speichern";

    // Default-Werte bereitstellen für neue Charaktere
    character.abilities ??= {};
</script>

<form method="POST" class="row g-3">
    <div class="col-md-6">
        <label for="name" class="form-label">Name</label>
        <input
            id="name"
            name="name"
            class="form-control"
            value={character.name}
            required
        />
    </div>

    <div class="col-md-3">
        <label for="level" class="form-label">Level</label>
        <input
            id="level"
            type="number"
            name="level"
            class="form-control"
            value={character.level}
            required
        />
    </div>

    <div class="col-md-3">
        <label for="proficiencyBonus" class="form-label"
            >Proficiency Bonus</label
        >
        <input
            id="proficiencyBonus"
            type="number"
            name="proficiencyBonus"
            class="form-control"
            value={character.proficiencyBonus}
        />
    </div>

    <div class="col-md-6">
        <label for="classId" class="form-label">Klasse</label>
        <select id="classId" name="classId" class="form-select">
            {#each classList as cls}
                <option value={cls._id} selected={cls._id === character.classId}
                    >{cls.name}</option
                >
            {/each}
        </select>
    </div>

    <div class="col-md-6">
        <label for="speciesId" class="form-label">Spezies</label>
        <select id="speciesId" name="speciesId" class="form-select">
            {#each speciesList as s}
                <option value={s._id} selected={s._id === character.speciesId}
                    >{s.name}</option
                >
            {/each}
        </select>
    </div>

    <div class="col-md-6">
        <label for="armorClass" class="form-label">Armor Class</label>
        <input
            id="armorClass"
            type="number"
            name="armorClass"
            class="form-control"
            value={character.armorClass}
        />
    </div>

    <div class="col-md-6">
        <label for="hitPoints" class="form-label">Hit Points</label>
        <input
            id="hitPoints"
            type="number"
            name="hitPoints"
            class="form-control"
            value={character.hitPoints}
        />
    </div>

      <div class="col-12">
        <label for="imageUrl" class="form-label">Bild-URL</label>
        <input
            id="imageUrl"
            name="imageUrl"
            class="form-control"
            value={character.imageUrl}
        />
    </div>

    <hr class="my-4" />

    <h2 class="mt-4">Abilities</h2>

    {#each ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"] as key}
        <div class="col-md-6">
            <label for={`${key}Score`} class="form-label text-capitalize"
                >{key}</label
            >
            <div class="input-group">
                <input
                    id={`${key}Score`}
                    type="number"
                    name={`${key}Score`}
                    class="form-control"
                    placeholder="Wert"
                    value={character.abilities?.[key]?.score}
                />
                <span class="input-group-text">Mod</span>
                <input
                    id={`${key}Mod`}
                    type="number"
                    name={`${key}Mod`}
                    class="form-control"
                    placeholder="+0"
                    value={character.abilities?.[key]?.mod}
                />
            </div>
        </div>
    {/each}

    <hr class="my-4" />
    
    <h2 class="mt-4">Hintergrund / Notizen</h2>

    <div class="col-12">
        <!-- <label for="notes" class="form-label">Hintergrund / Notizen</label> -->
        <textarea id="notes" name="notes" class="form-control" rows="4"
            >{character.background}</textarea
        >
    </div>

    <div class="col-12 d-flex gap-2">
         <a href="/characters" class="btn-light">Zurück</a>
        <button type="submit" class="btn-standard mb-5">
            {submitLabel}
        </button>
    </div>
</form>
