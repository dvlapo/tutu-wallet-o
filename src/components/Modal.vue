<template>
    <!-- Modal -->
    <div
        class="modal fade"
        id="transferModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog bottom-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Transfer</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="form-group mb-3">
                        <label>
                            Reciever
                            <span
                                class="ast"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="important"
                                >*</span
                            >
                        </label>
                        <input
                            type="text"
                            class="form-control fm"
                            placeholder="@username or wallet ID of benefecial"
                            required=""
                        />
                    </div>
                    <div class="form-group mb-3 text-center">
                        <label> Enter Amount </label>
                        <input
                            type="text"
                            class="form-control amount"
                            data-type="currency"
                            placeholder="₦1,000,000.00"
                            required=""
                            pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                        />
                    </div>
                    <div class="form-group mb-3 text-center">
                        <button type="button" class="cusbtn">Transfer</button>
                    </div>
                </div>
                <!--<<div class="modal-footer">
     button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
     <button type="button" class="btn btn-primary">Transfer changes</button>
   </div>-->
            </div>
        </div>
    </div>

    <div
        class="modal fade"
        id="receiveModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Receive</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="form-group mb-3">
                        <h4 class="text-center">Scan</h4>
                    </div>
                    <div class="form-group mb-3 text-center">
                        <img src="images/tutuqr.png" width="200" />
                    </div>
                </div>
                <!--<<div class="modal-footer">
     button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
     <button type="button" class="btn btn-primary">Transfer changes</button>
   </div>-->
            </div>
        </div>
    </div>
</template>
