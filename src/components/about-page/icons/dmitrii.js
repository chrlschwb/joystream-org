import * as React from 'react';

const Dmitrii = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={76}
      height={76}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip10)">
        <path
          d="M0 38C0 17.013 17.013 0 38 0s38 17.013 38 38-17.013 38-38 38S0 58.987 0 38z"
          fill="currentColor"
        />
        <g clipPath="url(#prefix__clip11)">
          <path
            d="M7.664 94.24c-1.747 0-3.37-.047-4.957-.142-.38-.022-.836-.029-1.317-.039-1.741-.03-3.713-.066-5.315-.753a5.912 5.912 0 01-1.643-1.045c-2.912-2.626-2.524-7.517-1.301-10.901l.023-.06c.215-.548.464-1.08.746-1.597A26.623 26.623 0 01.895 71.43c3.156-2.453 6.67-3.93 10.15-4.27 2.377-.233 4.887-.57 7.129-1.452 3.579-1.41 4.03-2.293 4.08-2.53.381-1.859.545-3.755.488-5.651-.044-.733-.14-1.46-.291-2.179a28.427 28.427 0 01-.285-1.813 15.704 15.704 0 01-.05-2.115c.017-.913.04-1.952-.233-2.43a4.13 4.13 0 00-.58-.508 7.442 7.442 0 01-1.3-1.218c-1.203-1.506-2.659-3.568-3.254-6.155-.272-1.175-.304-2.331-.333-3.353-.028-.995-.054-1.933-.288-2.73-1.39-4.72-.127-10.331 1.288-15.203a43.748 43.748 0 012.741-7.034l.037-.08.046-.074c1.843-3.123 4.081-5.01 7.257-6.122l.146-.052c1.892-.663 4.25-1.488 6.388-1.627 1.089-.068 2.278-.122 3.631-.162h.197a23.363 23.363 0 014.057.299l.083.015.384.097a10.552 10.552 0 012.65-.514h.325a5.469 5.469 0 013.833 1.521l.022.022c.423.401 1.416 1.34 1.355 2.712-.01.201-.041.401-.096.595l.031.022c1.041.683 2.245 1.244 3.143 1.464.366.091.763.163 1.183.234.855.129 1.698.333 2.518.61.891.326 1.553.946 2.036 1.4.075.071.171.163.256.237l.272.015.499.374.039.023c.465.233.869.571 1.18.988a26.099 26.099 0 011.774 2.125c.278.36.542.698.813 1.026 1.315 1.592 2.5 3.936 3.091 6.117.488 1.81-.151 3.924-1.86 6.113-.759.976-1.572 1.248-2.16 1.352-.109.346-.268.675-.471.976a3.048 3.048 0 01-2.32 1.354l.021.174c.068.444.108.892.12 1.34 0 1.433-.004 2.864-.01 4.296v2.148c0 2.44-.375 4.672-.728 6.834-.145.882-.294 1.79-.418 2.706-.192 1.43-.605 2.724-1.004 3.975-.187.587-.364 1.139-.514 1.694-.133.488-.234 1.025-.343 1.591-.257 1.349-.55 2.878-1.38 4.314a9.813 9.813 0 01-1.193 1.555 9.53 9.53 0 00-.794.976c.195.13.465.282.669.396.555.29 1.08.635 1.568 1.028 1.9.402 3.531 1.302 5.114 2.163.867.501 1.765.947 2.689 1.335.325.129.659.256.987.381l.06.025c1.107.424 2.44.758 3.864 1.11 4.117 1.028 8.784 2.19 11.13 6.347.183.313.343.639.477.976.735 1.723 1.06 3.474 1.376 5.168.11.592.215 1.15.335 1.703.074.266.164.528.27.783.137.358.291.763.412 1.2.236.774.274 1.596.109 2.388-.371 1.619-1.587 2.624-3.174 2.624-.501-.014-.998-.09-1.48-.224a7.122 7.122 0 00-.355-.083 9.585 9.585 0 00-1.759-.142c-.976 0-2.002.098-3.09.2-1.089.103-2.177.209-3.273.217h-.557c-1.553 0-3.117-.044-4.628-.085-1.335-.037-2.716-.076-4.066-.083-3.303-.018-6.649-.09-9.884-.163-1.227-.026-2.453-.053-3.68-.076-.65-.011-1.301-.02-1.952-.026h-1.636c-6.592 0-13.632.302-22.831.976l-.376.028c-3.776.28-7.678.568-11.564.618-.45.002-.895.005-1.344.005z"
            fill="#000"
          />
          <path
            d="M32.411 75.948c-.475-.587-1.324-.895-1.503-1.668-.199-.864-.826-1.334-1.354-1.93-.41-.462-.868-.624-1.463-.673-1.07-.08-2.208-1.28-2.307-2.337a2.228 2.228 0 00-.438-1.13c-.376-.538-.48-1.216-.77-1.808a.651.651 0 01.066-.64c.455-.626.39-1.342.398-2.048 0-.2.017-.4.05-.597v.01a9.924 9.924 0 01-3.879 3.46 10.083 10.083 0 01-4.947 1.943c-1.156.246-2.397.202-3.596.177-1.364.133-2.718.35-4.054.651-.904.332-1.787.717-2.645 1.152a30.458 30.458 0 00-1.801 1.414c-2.547 2.291-5.55 5.093-7.2 8.136-.232.427-.439.868-.618 1.32-.966 2.694-1.311 6.524.687 8.325a3.62 3.62 0 001.005.64c1.435.22 2.848.421 4.257.57.475.046.948.089 1.427.123 2.88.163 5.717.638 8.458.163.394-.069.785-.155 1.178-.262 5.58-.887 12.936 1.026 17.42-2.04 0-.614.009-1.226.009-1.84 0-.613 0-1.225-.016-1.837a1.329 1.329 0 00-.287-.813c-.582-.765-.538-1.41.033-2.203.408-.568.872-1.108.91-1.88.023-.463.375-.733.82-.826.414-.088.554-.36.573-.739.034-.686.031-1.371 0-2.058-.026-.329-.224-.52-.413-.755zM78.377 79.508a4.506 4.506 0 00-.748-1.35 6.454 6.454 0 00-1.02-.977c-2.22-1.718-5.443-2.082-8.072-3.21l-1.046-.428-1.044-.426c-.685-.28-1.378-.547-2.07-.814l-1.039-.4c-2.556-.996-4.903-2.929-7.618-3.39a6.982 6.982 0 00-1.187-.102c-.59.147-.295.736-.441 1.03-.883.882-2.208 1.325-2.797 2.501-.44 1.03-.588 2.354.295 3.092.146.146.44 0 .735-.149-.589 1.767 1.178 3.092 1.324 4.857 0 .295 0 .736-.146.884-1.03 1.03-1.178 1.464-.31 2.491a5.54 5.54 0 01-.077 1.334c-.1.49-.325.946-.65 1.325-.443.589-.149 1.324-.103 2.024 0 .488.035.976.07 1.464.016.212.191.326.325.469h5.008c.226-.337.43-.688.612-1.05.184-.371.312-.768.38-1.178.19-.7.487-1.288.632-2.025.294 1.178-.737 2.061-.687 3.037.018.433.152.853.388 1.216h17.65c.305-.231.36-.557.362-.913 0-.39 0-.781.013-1.167.062-.385.12-.777.18-1.173.058-.395.116-.794.173-1.196.163-1.57.457-3.189.766-4.787.054-.33.101-.66.142-.989zM52.55 74.851c-.241-.28.148-.17.201-.239-.061.098-.102.218-.201.24zm.403-.408c.449-.28.945-.475 1.464-.576a4.942 4.942 0 00-1.464.582v-.006zm6.448 10.25c-.013-.103-.013-.103.074-.138a.624.624 0 00-.074.143v-.004zm.41-.422c.127-.18.191-.397.184-.617.02.246.026.486-.184.621v-.004zm.163-.93a6.291 6.291 0 01-.054-.67c.032.224.053.45.06.675l-.006-.005zm-.096-1.199a1.084 1.084 0 01.122-.74 1.81 1.81 0 00-.119.745l-.003-.005zM57.14 18.586c-.3-.419-.47-.916-.488-1.43 0-.507-.198-.804-.722-.944-.65-.173-1.155-.597-1.301-1.278a1.007 1.007 0 00-.215-.468 36.27 36.27 0 01-.934-.273c-.833-.01-1.664 0-2.497-.009a3.052 3.052 0 01-1.513-.462c-.592-.325-1.138-.823-1.825-.917-.959-.13-1.93-.144-2.892-.041-.012 0-.077 0-.088.02.072-.448.192-.93-.208-1.294a1.39 1.39 0 01-.453-1.111c0-.518-.055-.965-.709-1.092-.309-.06-.488-.376-.13-.58.234-.135.465-.275.701-.403a70.513 70.513 0 01-2.084-.5 21.026 21.026 0 00-3.728-.26c-1.16.034-2.325.081-3.49.155-1.849.117-4.086.916-5.825 1.526-2.757.968-4.483 2.566-5.947 5.052a40.606 40.606 0 00-2.562 6.538c-1.202 4.138-2.516 9.437-1.267 13.687.71 2.418-.031 5.25 1.07 7.55.25.52.454 1.062.612 1.617.401.217.795.459 1.18.724a5.17 5.17 0 01-.812-2.38.423.423 0 01.092-.275c.456-.537.448-1.188.384-1.814-.105-1.056.326-1.837 1.079-2.506.39-.342.57-1.386.296-1.83a.747.747 0 00-.18-.206c.165.086.315.195.447.326.35.343.606.929 1.176.926.976 0 1.654.496 2.258 1.176.362.407.769.4 1.158.062.245-.243.559-.404.9-.459.487-.057.65-.366.661-.814.015-.39-.045-.836.227-1.138.375-.424.573-.976.553-1.541a.747.747 0 01.188-.547c.586-.505.52-1.178.518-1.835-.007-1.27.806-2.083 1.815-2.523 1.24-.537 2.43-1.043 3.327-2.115.273-.325.44-.615.445-1.026.008-.834.047-1.67 0-2.5-.063-1.018.52-1.816.869-2.68a1.454 1.454 0 011.27-.89 33.442 33.442 0 013.233 0 .821.821 0 01.554.163c.472.474 1.056.563 1.682.568a.682.682 0 01.488.148c.663.705 1.52.544 2.34.556.488 0 1.018-.055 1.399.314.38.37.803.424 1.278.422h1.765c.475 0 .887-.067 1.263-.446.488-.488 1.205-.361 1.626.192a.61.61 0 00.221.107c1.188.506 1.913-.587 2.883-.84.04-.01.065-.076.072-.123.104-.771.294-1.575-.16-2.28zM21.678 35.28c.152-.04.31-.056.467-.049-.15.005-.308.031-.464.049h-.003zM21.338 35.395l-.145.142.145-.142zM59.045 75.063z"
            fill="#000"
          />
          <path
            d="M21.088 35.545c-.046-.91 1.27-.976 1.935-.596.949.544 1.16 1.275 2.362 1.457.557.084.767.1 1.175.564.325.368.325.6.735.59.903-.02 1.349-1.062 1.557-1.758.325-1.075.802-2.087 1.155-3.153.338-1.022.258-2.304.95-3.17.659-.823 1.604-.831 2.5-1.218a4.192 4.192 0 002.09-1.912c.794-1.57.18-3.531.674-5.188.67-2.256 3.198-2.061 5.118-1.804 1.036.138 2.225.38 3.168.84.51.247.773.499 1.31.564.537.065 1.088.012 1.653.142 1.033.236 2.05.735 3.13.722.923-.01 1.514-.748 2.392-.826 1.032-.092 1.627.528.687 1.197-.37.265-.734.555-1.183.67-.449.116-.88-.047-1.25.293-.7.651-.585 1.836-1.891 1.83-.716 0-2.033-1.384-2.702-.546-.564.71.968 1.19.857 1.953-.162 1.139-1.475.213-1.962.912-.214.31 0 .908-.162 1.302-.197.479-.628.711-.92 1.105-.78 1.05.892.729 1.577 1.066.501.247.914.615 1.45.83.396.162 1.052.224 1.351.56.267.299.171.72.526.992.354.271.824.071 1.195.247 1.207.57-.307 1.512-.13 2.278.189.814 1.02 1.598 1.301 2.36.163.449.017 1.02.079 1.49.08.592.42.99.566 1.536.151.573.114.906.406 1.448a2.46 2.46 0 01.35 1.54c-.073 1.01-.63 1.592-1.357 2.264-.662.615-2.105.693-2.402 1.723-.257.892 1.23.791 1.802 1.289.469.408.992 1.443.45 2.018-.447.473-1.236.099-1.766.271-.849.277-.556 1.121-.047 1.649.392.406 1.776.745 1.077 1.609-.462.57-1.838.162-2.507.525a5.822 5.822 0 01-1.213.489c-.685.218-.545.325-.456.964.163 1.183.142 1.73 1.456 1.821.68.046 1.376 0 2 .325.622.326 1.434 1.011 1.603 1.703.212.868.085 1.937 0 2.919-.028.325-.052.65-.057.942-.432 2.43 2.951 2.725 3.834 4.344 1.325 2.06-.146 4.709.387 7.094.037.504.042 1.01.014 1.513.027.336.055.67.068 1.006a6.194 6.194 0 01-.2 2c-.363 1.228-.897 2.395-1.19 3.648-.118.514-.239 1.04-.526 1.49-.444.693-1.364 1.14-1.357 2.058 0 .687.421 1.891-.306 2.262-.58.296-1.81.1-2.44.085-.813-.017-1.697.105-1.745-.977-.031-.691.488-1.371.574-2.073.102-.863.032-1.763.032-2.632v-5.457-5.458c0-.888-.03-1.79 0-2.67.012-.34.085-.608-.055-.922-.14-.314-.488-.274-.488-.713-.01-.544.724-1.302 1.233-1.323a.636.636 0 01.729.527 57.28 57.28 0 00.036 3.428c.037.489.117.918.276 1.183.16.266.394.358.74.153a3.24 3.24 0 00.464-1.226c.065-.421.057-.85-.026-1.268-.036-.843-.771-1.578-1.12-2.307a1.694 1.694 0 01-.315-.874c-.073-.734.038-1.302-.532-1.873-.813-.826-3.535-.2-2.738-1.934.339-.733.636-1.121.44-1.992-.184-.814-.498-.921-1.212-.597-1.464.665-2.624.457-2.105-1.442.488-1.79-.976-1.279-2.055-1.913-.247-.145-.374-.396-.621-.511-.247-.116-.545.049-.768-.147-.273-.239-.376-1.078-.223-1.42.153-.342 1.277-.7.405-.942-.283-.078-.65.26-.916.35-.38.113-.776.164-1.172.15-.615 0-1.577.082-2.156-.09-.677-.202-1.285-.814-1.981-1.077-.788-.292-.976-.287-1.288-1.027-.295-.693-.822-1.162-1.234-1.811-.426-.674-.71-1.424-1.125-2.105-.415-.682-.955-1.175-1.027-1.953-.071-.778.163-1.656-.022-2.44-.09-.382-.585-1.452-.889-1.681-1.35-1.013-1.285 2.54-1.285 3.052.02.394.017.788-.01 1.181-.04.353-.325.708-.344 1.016-.059.65.36 1.384.36 2.115 0 .758-.136 1.645 0 2.39.1.571.487 1.149.738 1.699.564 1.231 1.729 2.115 2.399 3.322.625 1.13.756 2.73 1.67 3.648 1.02 1.025 2.545 1.387 3.622 2.373.992.91 1.892 1.472 3.208 1.79.93.22 2.236.572 1.218 1.576-1.018 1.004-.875 1.953-.813 3.324.035.868-.215 1.204-.553 1.953-.228.504-.326 1.49.013 1.982.88 1.301 3.06-.152 3.904-.746.592-.418 1.088-1.101 1.867-1.046.706.052 1.124.56 1.118 1.258-.017 1.433-1.936 1.73-2.182 3.043-.268 1.435 1.71 2.038 1.422 3.532-.143.739-.592 1.074-.65 1.868a5.099 5.099 0 01-.651 2.115c-.334.627-.936 1.265-.885 2.015.045.675.633 1.12.735 1.79.063.403.055 1.399-.342 1.664-.488.326-2.077.042-2.687.044-1.804 0-3.608.013-5.412.015-1.72 0-3.44.008-5.162-.025.54-.464.087-2.148 0-2.756-.146-1.007-.414-2.016-.488-3.033-.229-3.183 4.1-5.532 1.79-8.585-1.677-2.21-4.867-2.94-6.28-5.337-.533-.89-.785-1.882-1.044-2.842-.314-1.17-.008-1.6.301-2.688.651-2.286.92-4.99.85-7.361-.043-1.4-.422-2.72-.578-4.1-.156-1.382-.094-2.73-.225-4.09-.125-1.32-.525-1.539-1.438-2.352-.475-.422-1.519-1.204-1.434-1.904-.706-.197-1.087-1.28-1.246-1.917-.292-1.15.457-1.666.514-2.766.032-.605-.075-1.181.136-1.77.225-.62.682-.814 1.051-1.302.269-.346.508-.947-.01-1.287-.325-.215-.855.065-1.223-.059-.003-.016-.005-.04-.006-.063z"
            fill="#C4C3C6"
          />
          <path
            d="M48.657 69.288c.488-.075.576.2.576.607-.01 5.885 0 11.769-.034 17.653 0 .74-.726 1.358-.553 2.182h-5c.479-1.344-.665-2.345-.765-3.596-.09-1.095.699-1.732 1.034-2.573.18-.454.441-.88.475-1.404.04-.626-.03-1.183.548-1.767.711-.716-.258-1.274-.667-1.79-1.036-1.285-.82-2.61.516-3.586.69-.5 1.406-1.13 1.069-2.197l.027-.096c.248-.162.293-.424.371-.677a.412.412 0 01.137-.143c.252-.087.535-.132.604-.462a.417.417 0 01.148-.138c.395-.083.473-.366.447-.714-.101-.81.483-1.055 1.067-1.299z"
            fill="#000"
          />
          <path
            d="M52.073 66.486c-.717-.014-.633-.555-.636-1.007 0-1.346.016-2.691 0-4.038-.016-1.348-1.394-2.664-2.756-2.643-.44 0-.883 0-1.322.026-.65.04-.929-.254-.903-.913.023-.525 0-1.004-.403-1.49-.36-.441-.326-1.04.527-1.107 1.301-.099 2.404-1.078 3.788-.826a.245.245 0 00.244-.355.742.742 0 00-.446-.291c-1.286-.317-1.529-1.42-1.493-2.415.03-.761.927-.291 1.42-.364.71-.106 1.79.162 1.227-1.082-.163-.358-.65-1.066-1.438-1.043-.402.011-.976.242-1.19-.407-.248-.768.324-1.196.783-1.56 1.005-.814 2.278-1.292 3.09-2.35a1.417 1.417 0 00-.082-1.87c-.586-.577-.691-1.762-.846-2.53-.195-.961-.376-1.952-.877-2.806-.398-.685-.903-1.341-.777-2.182.162-1.06.743-1.577-.651-1.722-.722-.073-.88-.802-1.332-1.269-.636-.66-1.502-1.036-2.379-1.26-.627-.162-1.322-.162-1.893-.504-1.79-1.06 1.5-1.524 1.316-2.659-.059-.36-.63-.65-.473-1.05.143-.37.763-.334 1.073-.308 2.152.179.043-1.528.326-2.423.236-.76 1.286-.48 1.817-.278.758.286 3.006 1.205 2.602-.516-.197-.833.446-1.077 1.13-1.22.844-.174 1.916-.664 2.752-.376.75.259 1.205 1.01 1.879 1.398.87.5 1.895.358 2.846.096.366-.101.426-.5.464-.851.032-.313.021-.625.226-.907.68-.932.457-1.692-.597-2.115-1.09-.43-1.091-.43-1.095-1.647 0-.341-.013-.685.021-1.025.026-.24.035-.5.345-.577l.697.039c.25.187.585.263.74.574.43.29 1.314.993 1.464 1.513.039.132-.035.22.042.366.057.111.194.163.277.251.499.52.976 1.167 1.42 1.734.325.415.343.956.65 1.392.631.9 1.036 1.978 1.321 3.034.28 1.03-.076 2.028-.727 2.846-.138.174-.338.293-.44.488-.238.477-.17.876-.699 1.203-.387.239-.954.09-1.386.14-.675.08-.748.473-.798 1.09-.03.35.076.831-.345.96-.488.15-1.044.244-1.492-.194-1.196-.2-.615.713-.716 1.175a4.25 4.25 0 00-.018.877c-.364.221-.315.626-.307.929.06 2.185-.032 4.37.031 6.556.01.3.037.56.255.777l-.01 3.056c0 1.022-.354 1.987-.632 2.956-.29 1.014-.325 2.02-.462 3.058-.264 1.964-1.046 3.8-1.547 5.703-.488 1.873-.571 4.08-1.894 5.614-.128.149-.267.288-.416.416-.765.65-1.215 1.093-1.357 2.15-.024.213-.014 1.762.062 1.763z"
            fill="#fff"
          />
          <path
            d="M58.447 16.025c.053.976-.399 1.777.426 2.584.43.418 1.117.5 1.496.976.352.44.384 1.214.122 1.708-.138.264-.418.357-.56.605-.178.313-.024.629-.1.96-.135.578-.589.679-1.11.785-1.594.325-2.78 0-3.983-1.103-.31-.285-.52-.476-.478-.921.723.105 1.21-.287 1.805-.623.4-.227 1.028-.27 1.149-.77.19-.793-.723-1.696-.887-2.44-.208-.943-.325-1.158-1.257-1.51-.796-.303-.651-.583-.894-1.244-.242-.66-1.065-.457-1.665-.465-.93-.013-1.93.027-2.823-.272-.893-.3-1.608-1.07-2.53-1.225-.884-.148-1.896-.033-2.784 0 .018-.244.102-.552.054-.794-.083-.418-.274-.34-.534-.59-.457-.435-.06-.963-.264-1.516-.265-.72-1.058-.197-1.343-.714-.091-.163-.015-.838.083-.997.423-.698 2.253-.977 2.98-1.02a3.252 3.252 0 012.948 1.408c.532.773.128.7-.515.954-.424.163-.458.294-.87-.04-.25-.206-.5-.652-.836-.752-1.11-.326-.026 1.23.119 1.565.252.58.472.78 1.052 1.067.37.18.976.527 1.414.45.488-.089 1.033-.744 1.353-.01.064.146-.083.305 0 .455.1.18.326.195.479.287.23.136.514.488.76.572.352.117.513-.239.813-.288.374-.06.995.228 1.35.344.89.296 1.76.651 2.603 1.062.399.218.81.413 1.231.584.47.163.945.096 1.139.651.031.09.05.182.057.277z"
            fill="#C4C3C6"
          />
          <path
            d="M49.192 11.781c.126.259.163.527-.153.672-.315.145-.782.12-1.1.073-.487-.07-.713-.488-1.138-.668-.506-.215-.75-.053-.947-.651-.197-.6-.702-1.115-.776-1.75-.071-.676.28-1.604 1.105-1.093.532.326.734 1.152 1.373 1.32.276.071.367-.017.353.325-.008.202-.093.404-.072.607.062.596.742.301 1.043.698.12.145.224.302.312.467z"
            fill="#fff"
          />
          <path
            d="M58.33 41.79c-.451-.059-.503-.376-.503-.75.008-2.22.012-4.444.01-6.671 0-.397.074-.728.515-.848-.006 2.76-.013 5.516-.021 8.269zM20.58 38.803c-.24.566.304 1.627-.382 1.641-.687.015-.337-1.05-.326-1.609.012-.56-.39-1.596.335-1.61.651-.012.116 1.039.373 1.578z"
            fill="#C4C3C6"
          />
          <path
            d="M51.95 13.158c.125.138.143.315-.054.506-.42.405-1.567-.182-1.111-.651.239-.252.916-.132 1.165.145z"
            fill="#fff"
          />
          <path
            d="M40.849 65.74c-1.302.065-2.624.016-3.758-.661-.686-.412-1.26-1.07-1.772-1.707-.868-1.087-2.588-.945-3.373-2.024-.412-.563-.174-1.546-.583-2.249-.928-1.593-2.244-2.937-3.154-4.536-.91-1.6-.537-3.19-.763-4.932-.07-.542-.803-.86-.527-1.372.913-1.685.314-3.517.65-5.236.08-.405.526-1.11 1.302-1.139.776-.029.588.651.867.977 1.095 1.264.549 2.714.631 4.084.028.463.373.613.594.864 2.2 2.49 3.935 8.168 8.482 6.775.836-.257 1.04-.854 1.952-.618.488.128 1.092.608 1.464.934-.412.36-2.053.428-2.163 1.046-.193 1.062 1.138.154 1.179.154.36 0 .564 1.078.924 1.274.794.433 1.807-.213 2.217 1.08.286.9-.467.787-.62 1.464-.216.95.199.976.944.803.919-.213 1.138-.515 2.142-.48.615.022.291.651.392 1.01.326 1.19-.172 2.183-.716 3.17-.014.038-.03.075-.047.113-.452.397-1.005.252-1.52.257-.513.005-.943.1-1.174.613-.627.209-1.267.126-1.904.083-.526.038-1.095-.226-1.564.22l-.102.032z"
            fill="#000"
          />
          <path
            d="M42.34 65.165l.046-.01c.906-.162 1.841-.063 2.75-.224 1.09-.195 2.197-.594 3.318-.552 1.831.069 1.865 1.393 2.378 2.776.281.763 1.06 1.256 1.194 2.08.078.488-.148.976 0 1.464.125.405.488.617.509 1.066.088 1.384-1.863 2.62-2.616 1.067-.424-.875.9-4.416-.302-4.678-.727-.163-1.085 1.204-1.315 1.627-.439.814-1.065 1.508-1.696 2.177-.669.708-1.255.744-2.1 1.13-.76.346-1.312 1.026-2.04 1.428-.976.54-3.015 1.318-3.691 0-.814-1.604.84-3.5.83-5.125 0-.757-.542-1.777-.046-2.47.31-.436.85-.357 1.252-.651.622-.462.723-.937 1.53-1.105z"
            fill="#fff"
          />
          <path
            d="M48.64 44.706c.337 1-.65 1.446-.894 2.172-.51 1.55-2.245 1.149-3.056 2.145-.106.128-.287.193-.235.395.073.276.317.278.535.283 1.029.018 2.057.024 3.091.042.19 0 .42-.013.472.241.016.072-.078.24-.11.238-1.492-.153-1.157 1.554-2.045 2.004a1.322 1.322 0 01-.347.137c-.605-.986-1.593-.459-2.401-.62-.426-.085-1.088.255-1.225-.325-.335-1.424.094-3.36 1.362-4.316.514-.388 1.26-.016 1.852-.325.41-.218 1.333-4.468 2.299-2.29.135.302.46.214.72.24l-.017-.021zM45.836 34.289c.017.831.662.501 1.077.571.355.06.846-.182.965.38.094.448.163.917-.441 1.156-.325.129-.38.563-.716.713a.437.437 0 00-.258.201c-.066.106-.108.386-.266.398-.114 0-.356-.279-.452-.35-.356-.262-.698-.534-.65-1.024.052-.527-.215-.765-.74-.714-.632.415-.92.399-1.444-.085.031-.28.178-.65-.276-.673-.355-.017-.87-.2-1.022.294-.114.376-.325.877.186 1.185.179.109.488.102.408.41-.08.307-.38.233-.612.268-1.636.256-2.986-1.057-4.64-.841-.373.049-.419-.597-.298-.85.271-.567.772-.992 1.435-1.01 1.857-.053 3.717-.057 5.576-.08l.1.051c.546.407.786.387 1.167-.106a.517.517 0 01.288-.202c.267-.02.516-.006.613.308z"
            fill="#000"
          />
          <path
            d="M45.835 34.289c-.277.01-.549-.049-.8.055-.209.088-.359.215-.6.223a.95.95 0 01-.611-.203c-.24-.192-.088-.326-.179-.6-.081-.242-.257-.235-.468-.326-.264-.119-.3-.23-.111-.47.307-.392.91-1.156 1.497-.967.432.139.572.706 1.026.814.224.055.488.035.667.198.218.194.237.588.182.856-.07.33-.285.407-.603.42z"
            fill="#fff"
          />
          <path
            d="M23.768 39.846c.4.035.86-.057.879.593.014.542-.205.772-.73.737-.651-.042-.692.744-1.222.913-.197.062-.163.651-.59.422-.307-.163-.26-.703-.14-.783.746-.5.378-2.065 1.803-1.882zM40.216 31.482l-.163-.014c-.62-.046-1.282.086-1.218-.77.084-1.14 1.015-.59 1.59-.675.61-.093 1.23-.031 1.148.854-.074.72-.81.654-1.357.605zM48.657 44.717c-.145-.704.488-.937.865-1.25.207-.172.697-.017 1.054.018.041 0 .12.269.082.301-.366.326-.724.682-1.139.913-.224.12-.574.012-.865 0l.003.018zM24.735 42.664c.626-.059.68.29.663.694-.01.277-.047.651-.398.534-.389-.127-.794-.44-.841-.877-.044-.412.398-.312.576-.351z"
            fill="#000"
          />
          <path
            d="M42.911 35.535l1.443.085c.11.825-.488.704-.976.716-.616.014-.515-.413-.467-.8z"
            fill="#fff"
          />
          <path
            d="M54.619 37.799c-.578-.19-1.66.29-1.627-.37.026-.633.906-1.26 1.907-1.12.756.103 1.413.8 1.334 1.138-.207.82-1.07.163-1.614.352zM43.673 34.24l1.453.04c-.009.435-.253.565-.651.544-.399-.02-.792-.039-.802-.584z"
            fill="#C4C3C6"
          />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip10">
          <path
            d="M0 38C0 17.013 17.013 0 38 0s38 17.013 38 38-17.013 38-38 38S0 58.987 0 38z"
            fill="#fff"
          />
        </clipPath>
        <clipPath id="prefix__clip11">
          <path
            fill="#fff"
            transform="translate(-7.79 4.56)"
            d="M0 0h91.2v89.68H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Dmitrii;
