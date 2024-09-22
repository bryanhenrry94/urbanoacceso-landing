"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepButton,
} from "@mui/material";
import { Save, NavigateNext, NavigateBefore } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
import PlanCard from "./PlanCard";

interface IFormInput {
  name: String;
  email: String;
  password: String;
  tenantName: String;
  tenantSubdomain: String;
}

interface Plan {
  _id: string;
  name: string;
  price: number;
  checked: boolean;
}

const plan_basic = {
  _id: "66ee2a2220c292b6cd63d233",
  name: "Plan Básico",
  price: 50,
  checked: false,
};

const FormAccount: React.FC = () => {
  const [plan, setPlan] = useState<Plan>(plan_basic);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChangeRadio = (checked: boolean) => {
    setPlan({ ...plan, checked });
  };

  const handleClicButtonCuenta = async () => {
    const isValid = await trigger();

    if (!isValid) {
      return;
    }

    handleNext();
  };

  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    console.log(data);
    console.log(plan);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepButton>
            <StepLabel>Seleccionar Plan</StepLabel>
          </StepButton>
          <StepContent>
            <Typography variant="caption">
              No se requiere tarjeta de crédito. Disfruta de todas las
              características del
              <strong> Plan Básico </strong> durante 30 días sin compromiso.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
              <PlanCard
                checked={plan.checked}
                value={plan._id}
                title={plan.name}
                subtitle="Gratis por 30 días"
                price={plan.price}
                handleChange={handleChangeRadio}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
                disabled={plan && plan.checked ? false : true}
                startIcon={<NavigateNext />}
              >
                Siguiente
              </Button>
            </Box>
          </StepContent>
        </Step>
        <Step>
          <StepButton>
            <StepLabel>Datos De La Cuenta</StepLabel>
          </StepButton>
          <StepContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 12 }}>
                <TextField
                  id="outlined-basic-email"
                  {...register("email", { required: true })}
                  label="Correo Electrónico"
                  variant="outlined"
                  name="email"
                  size="small"
                  type="email"
                  fullWidth
                  error={errors.email ? true : false}
                  helperText={errors.email ? "Correo es requerido" : ""}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <TextField
                  id="outlined-basic-password"
                  {...register("password", { required: true })}
                  label="Contraseña"
                  variant="outlined"
                  name="password"
                  size="small"
                  type="password"
                  fullWidth
                  error={errors.password ? true : false}
                  helperText={errors.password ? "Contraseña es requerida" : ""}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <TextField
                  id="outlined-basic-name"
                  {...register("name", { required: true })}
                  label="Nombre"
                  variant="outlined"
                  name="name"
                  size="small"
                  type="text"
                  fullWidth
                  error={errors.name ? true : false}
                  helperText={errors.name ? "Nombre es requerido" : ""}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <Typography variant="body2">Datos del Tenant</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <TextField
                  id="outlined-basic-tenant-name"
                  {...register("tenantName", { required: true })}
                  label="Urbanizacion/Condominio"
                  variant="outlined"
                  name="tenantName"
                  size="small"
                  type="text"
                  fullWidth
                  error={errors.tenantName ? true : false}
                  helperText={
                    errors.tenantName
                      ? "Nombre de la urbanización/condominio es requerido"
                      : ""
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <TextField
                  id="outlined-basic-tenant-subdomain"
                  {...register("tenantSubdomain", { required: true })}
                  label="subdominio"
                  variant="outlined"
                  name="tenantSubdomain"
                  size="small"
                  type="text"
                  fullWidth
                  error={errors.tenantSubdomain ? true : false}
                  helperText={
                    errors.tenantSubdomain
                      ? "subdominio de la urbanización es requerido"
                      : ""
                  }
                />
              </Grid>
            </Grid>
            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                onClick={handleClicButtonCuenta}
                sx={{ mt: 1, mr: 1 }}
                startIcon={<NavigateNext />}
              >
                Siguiente
              </Button>
              <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
                startIcon={<NavigateBefore />}
              >
                Atras
              </Button>
            </Box>
          </StepContent>
        </Step>
        <Step>
          <StepButton>
            <StepLabel>Información de Pago</StepLabel>
          </StepButton>
          <StepContent>
            <Typography variant="body2">
              No se requiere tarjeta de crédito. Disfruta de todas las
              características del <strong>Plan Básico</strong> durante 30 días
              sin compromiso.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                sx={{ mt: 1, mr: 1 }}
                type="submit"
                startIcon={<Save />}
              >
                Finalizar
              </Button>
              <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                Atras
              </Button>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
};

export default FormAccount;
