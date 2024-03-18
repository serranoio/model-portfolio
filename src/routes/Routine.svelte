<script lang="ts">
  import { Row } from "$lib/content";


// include drawer which shows you the details:
// a description
// the why
let openDrawer = false;

// @ts-ignore
const selectRow = (e: any) => {
    console.log(e.target)

    const target = e.target.nodeName === "TD" ? e.target.closest("tr") : e.target;


    openDrawer = true;

    console.log(openDrawer)
}

const closeDrawer = () => {
    openDrawer = false;
}

</script>


<section id="routine" class="cinzel-main">
    <h2 class="cinzel-main">My Daily Routine</h2>
    <p class="cinzel-main">I believe in optimizing my systems so that I can effectively acheive my goals. Everything here is calculated and adjusted for randomness.</p>
    
    <div class={`drawer ${openDrawer ? "open" : ""}`}>
        <button on:click={closeDrawer} class="close-button">X</button>
    </div>
    <table on:click={selectRow}>
        <tr id={Row.FiveAm}>
            <td>05:00</td>
            <td>Wake up</td>
        </tr>
        <tr id={Row.Meditate}>
            <td>05:00-05:15</td>
            <td>Meditate</td>
        </tr>
        <tr id={Row.PlanDay}>
            <td>05:15-05:30</td>
            <td>Plan day</td>
        </tr>
        <tr id={Row.PlanDay}>
            <td>05:30-05:45</td>
            <td>Creativity session</td>
        </tr>
        <tr id={Row.BrushTeethCommunte}>
            <td>05:45-06:00</td>
            <td>Brush teeth, commute to gym</td>
        </tr>
        <tr id={Row.Gym}>
            <td>06:00-07:30</td>
            <td>Gym</td>
        </tr>
        <tr id={Row.EatShower}>
            <td>07:30-08:15</td>
            <td>Eat, Shower</td>
        </tr>
        <tr id={Row.FirstPomodoroSession}>
            <td>08:15~11:00</td>
            <td>First Pomodoro session</td>
        </tr>
        <tr id={Row.EatLunch}>
            <td>11:00-11:30</td>
            <td>Eat Lunch</td>
        </tr>
        <tr id={Row.Nap}>
            <td>11:30-12:00</td>
            <td>Nap</td>
        </tr>
        <tr id={Row.MiddayPomodoroSession}>
            <td>12:00-15:00</td>
            <td>Mid-day pomodoro session</td>
        </tr>
        <tr id={Row.Dinner}>
            <td>15:00-15:30</td>
            <td>Dinner</td>
        </tr>
        <tr id={Row.LastPomodoroSession}>
            <td>15:30-17:00</td>
            <td>Last pomodoro session</td>
        </tr>
        <tr id={Row.Recharge}>
            <td>17:00-17:45</td>
            <td>Recharge</td>
        </tr>
        <tr id={Row.CommuteToDance}>
            <td>17:45-18:00</td>
            <td>Commute to dance</td>
        </tr>
        <tr id={Row.Dance}>
            <td>18:00-20:45</td>
            <td>Dance classes Or cook/ buy food</td>
        </tr>
        <tr id={Row.Sleep}>
            <td>9:00</td>
            <td>In bed, Sleep</td>
        </tr>
    </table>
</section>

<style>
    .close-button {
        position: absolute;
        right: 18%;
        background-color: var(--gray25);
        padding: calc(var(--spacingHalf) * 3);
        width: 12rem;
        height: 3rem;
        top: -6%;
        font-size: var(--fontSizeLarge);
        border: none;
        cursor: pointer;
        color: var(--gray80);
        transition: all .2s;
    }

    .close-button:hover {
        background-color: var(--gray30);
    }

    .drawer {
        overflow:visible;
        background-color: var(--gray20);
        width: 100vw;
        height: 40rem;
        position: fixed;
        bottom: 0%;
        transition: all .7s ease-in-out;
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        transform: translateY(100%);
    }
    
    .open {
        transform: translateY(0%);
    }

    table {
        margin: 0 auto;
        max-width: 120rem;
    }

    tr {
        display: flex;
        justify-content: space-between;
        gap: var(--spacing);
        padding: var(--spacing);
        transition: all .2s;
        border-radius: var(--borderRadius);
    }

    tr:hover {
        box-shadow: 0 0 0 2px rgba(255,255,255,200);
        cursor: pointer;
    }

    h2 {
        font-size: var(--fontSizeXXLarge);
        color: var(--gray92);
        text-align: center;
        font-family: inherit;
        margin-bottom: calc(var(--spacing) * 2);
    }
    p {
        font-size: var(--fontSizeXLarge);
        color: var(--gray80);
        font-style: italic;
        text-align: center;
        font-family: inherit;
        margin-bottom: calc(var(--spacing) * 2);
    }
    * {
        font-family: inherit;
    }
    
    td {
        font-size: var(--fontSizeXLarge);
        font-family: inherit;
        color: var(--gray80);
    }


</style>