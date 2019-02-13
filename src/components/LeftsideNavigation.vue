<template>

    <nav id="nav-leftside" class="col-md-2 d-none d-md-block bg-dark sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <b-link class="active nav-link" to="/">
                        Dashboard
                    </b-link>
                </li>
                <li class="nav-item">
                    <b-link class="nav-link" to="/products">
                        Products
                    </b-link>
                </li>
                <li class="nav-item">
                    <b-link class="nav-link">
                        Orders
                    </b-link>
                </li>
                <li class="nav-item">
                    <b-link class="nav-link">
                        Integrations
                    </b-link>
                </li>
                <li class="nav-item">
                    <b-link class="nav-link" to="/support">
                        Support
                    </b-link>
                </li>
                <li class="nav-item">
                    <b-link class="nav-link" to="/about">
                        About
                    </b-link>
                </li>
            </ul>

        </div>
    </nav>

</template>

<style scoped lang="scss">
    .sidebar-sticky {
        position: relative;
        top: 0;
        height: calc(100vh - 48px);
        padding-top: .5rem;
        overflow-x: hidden;
        overflow-y: auto;
    }

    #nav-leftside {
        padding: 0;
        text-align: left;
        .nav-link {
            color: white;
        }
        .active {
            font-weight: bold;
        }
        li {
            line-height: 2em;
            :hover {
                background-color: aliceblue;
                color: #000000;
            }
        }
    }
</style>