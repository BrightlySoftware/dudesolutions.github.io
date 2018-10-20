<template>
<v-layout class="footer bg-dude-blue">
  <v-flex class="align-center">
    <v-layout class="align-center">
      <v-flex class="flex-col text-white text-left">
        <v-flex>Dude Solutions, Inc.</v-flex>
        <v-flex>11000 Regency Parkway, Suite 110</v-flex>
        <v-flex>Cary, NC 27518 USA</v-flex>
      </v-flex>
      <v-flex class="text-white flex-col">
        <v-layout>
          <div class="flex flex-col xs12 sm6 offset-sm6">
            <v-layout>
              <v-flex>
                <v-btn small icon class="text-white bg-dude-red text-xs" href="https://github.com/DudeSolutions">
                  <font-awesome-icon :icon="['fab','github']"/>
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn small icon class="text-white bg-dude-red" href="http://careers.stackoverflow.com/company/dude-solutions">
                  <font-awesome-icon :icon="['fab','stack-overflow']"/>
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn small icon class="text-white bg-dude-red" href="https://twitter.com/dudesolutions">
                  <font-awesome-icon :icon="['fab','twitter']"/>
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn small icon class="text-white bg-dude-red" href="https://www.linkedin.com/company/dude-solutions">
                  <font-awesome-icon :icon="['fab','linkedin']"/>
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn small icon class="text-white bg-dude-red" href="https://www.facebook.com/dudesolutions/">
                  <font-awesome-icon :icon="['fab','facebook']"/>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
        </v-layout>
        <p class="mb-0 pr-sm text-right w-full">
          &copy;2018 Dude Solutions, Inc.
        </p>
      </v-flex>
    </v-layout>
  </v-flex>
</v-layout>
</template>